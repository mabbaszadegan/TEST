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
}
