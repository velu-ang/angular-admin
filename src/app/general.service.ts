import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable()
export class GeneralService {
  headers: any;
baseUrl: any= environment.url;
  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
  }


  getUsers(): Observable<any> {
      return this.http.get(this.baseUrl +'members', {headers: this.headers});
  }

  getBlogs(): Observable<any> {
    return this.http.get(this.baseUrl +'blogs', {headers: this.headers});
}
getEvents(): Observable<any> {
  return this.http.get(this.baseUrl +'events', {headers: this.headers});
}
}
