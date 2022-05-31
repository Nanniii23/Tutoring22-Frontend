import { Injectable } from '@angular/core';
import {Appointment, Offer} from "./offer";
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';
import {User} from "./user";

@Injectable()
export class UserService {
  private api = 'http://tutoring22.s1910456006.student.kwmhgb.at/api';
  constructor(private http: HttpClient) { }

  getUserName(id: string): Observable<Offer> {
    return this.http.get<User>(`${this.api}/offers/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }



}
