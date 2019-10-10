import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
export class users {
   id: number;
   name: string;
   age: string;
   address: string;
}
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  base_path = 'http://localhost:3000/api/user';
  getList(): Observable<users> {
    return this.http
      .get<users>(this.base_path)
  };

  

}
