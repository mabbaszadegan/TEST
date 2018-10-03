import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Bank } from '../models/Bank';
//import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BankService {

  private banksUrl = 'http://localhost:4000/api/bank';  // URL to web api

  constructor(
    private http: HttpClient
    //private messageService: MessageService
    ) 
    { }

  /** GET banks from the server */
  get (): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.banksUrl)
      .pipe(
        tap(banks => this.log('fetched banks')),
        catchError(this.handleError('getBanks', []))
      );
  }

  /** GET bank by id. Return `undefined` when id not found */
  getBankNo404<Data>(id: number): Observable<Bank> {
    const url = `${this.banksUrl}/?id=${id}`;
    return this.http.get<Bank[]>(url)
      .pipe(
        map(banks => banks[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} bank id=${id}`);
        }),
        catchError(this.handleError<Bank>(`getBank id=${id}`))
      );
  }

  /** GET bank by id. Will 404 if id not found */
  getBank(id: number): Observable<Bank> {
    const url = `${this.banksUrl}/${id}`;
    return this.http.get<Bank>(url).pipe(
      tap(_ => this.log(`fetched bank id=${id}`)),
      catchError(this.handleError<Bank>(`getBank id=${id}`))
    );
  }

  /* GET Banks whose name contains search term */
  searchBanks(term: string): Observable<Bank[]> {
    if (!term.trim()) {
      // if not search term, return empty bank array.
      return of([]);
    }
    return this.http.get<Bank[]>(`${this.banksUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found banks matching "${term}"`)),
      catchError(this.handleError<Bank[]>('searchBanks', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new bank to the server */
  addBank (bank: Bank): Observable<Bank> {
    return this.http.post<Bank>(this.banksUrl, bank, httpOptions).pipe(
      tap((bank: Bank) => this.log(`added bank w/ id=${bank.BankId}`)),
      catchError(this.handleError<Bank>('addbank'))
    );
  }

  /** DELETE: delete the bank from the server */
  deletebank (bank: Bank | number): Observable<Bank> {
    const id = typeof bank === 'number' ? bank : bank.BankId;
    const url = `${this.banksUrl}/${id}`;

    return this.http.delete<Bank>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted bank id=${id}`)),
      catchError(this.handleError<Bank>('deletebank'))
    );
  }

  /** PUT: update the bank on the server */
  updatebank (bank: Bank): Observable<any> {
    return this.http.put(this.banksUrl, bank, httpOptions).pipe(
      tap(_ => this.log(`updated bank id=${bank.BankId}`)),
      catchError(this.handleError<any>('updatebank'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a bankService message with the MessageService */
  private log(message: string) {
    //this.messageService.add(`bankService: ${message}`);
  }
}