import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable()
export class GeneralService {
  headers: any;
  baseUrl: any = environment.url;
  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
  }


  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'members', { headers: this.headers });
  }

  getBlogs(): Observable<any> {
    return this.http.get(this.baseUrl + 'blogs', { headers: this.headers });
  }
  getEvents(): Observable<any> {
    return this.http.get(this.baseUrl + 'events', { headers: this.headers });
  }
  blogPost(blog): Observable<any> {
    console.log(blog);
    blog.member_id = 1;
    return this.http.post(this.baseUrl + 'blogs',{'blog': blog}, { headers: this.headers });
  }
  eventPost(blog): Observable<any> {
    console.log(blog);
    blog.member_id = 1;
    return this.http.post(this.baseUrl + 'events',{'event': blog}, { headers: this.headers });
  }
  getDashboardData(){
    return this.http.get(this.baseUrl + "admins/dashboard", { headers: this.headers });
  }
}
