import {Injectable} from '@angular/core'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable,Subject, of } from 'rxjs';
import {map,catchError,tap} from 'rxjs/operators'
import { bank } from '../models/bank';

@Injectable()
export class MyService{
    /**
     *
     */
    constructor(private http:HttpClient) {
    }
getAllBanks():Observable<bank[]>{
    return this.http.get<bank[]>('http://localhost:4000/api/bank/').pipe(
        catchError(this.handleError('getBanks',[]))
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
    //this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}