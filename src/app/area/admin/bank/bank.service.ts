import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { of, Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Bank } from "../../../models/bank";

const banksUrl = "http://localhost:4000/api/bank"; // URL to web api
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable()
export class BankService {
  /**
   *
   */
  constructor(private http: HttpClient) {}

  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(banksUrl);
  }

  addBank(bank: Bank): Observable<Bank> {
    return this.http.post<Bank>(banksUrl, bank, httpOptions);
  }

  deleteBank(bank: Bank): Observable<Bank> {
    const id = bank.BankId;
    const url = `${banksUrl}/${id}`;
   
    return this.http.delete<Bank>(url, httpOptions).pipe(
      tap(_=>console.log(`deleted bank id=${bank.BankId}`)),
      catchError(this.handleError<Bank>("delete bank"))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
