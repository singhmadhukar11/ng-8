import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainService {
 constructor(private http: HttpClient) {}
 base_path = 'http://localhost:3000/api/user';
  gridUrl = "https://api.myjson.com/bins/15psn9";

  shareRowdta = [];

 // Create a new item
  createItem(item){
    return this.http.post<any>(this.base_path, item)
  };

  removeItem(item, index): Observable<any> {
    return this.http.delete(this.base_path + "?id=" + item.data._id)
  };
  
}
