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

login(data): Observable<any> {
  return this.http.post(this.baseUrl + 'admins/login',data, { headers: this.headers });
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
    this.headers['Content-Type'] ='multipart/form-data';
    // blog.member_id = 1;
    return this.http.post(this.baseUrl + 'blogs',blog, { headers: this.headers });
  }
  eventPost(blog): Observable<any> {
    console.log(blog);
    blog.member_id = 1;
    return this.http.post(this.baseUrl + 'events',{'event': blog}, { headers: this.headers });
  }
  getDashboardData(): Observable<any>{
    return this.http.get(this.baseUrl + "admins/dashboard", { headers: this.headers });
  }

  getSubscribe(): Observable<any>{
    return this.http.get(this.baseUrl + "subscriptions", { headers: this.headers })
  }
  getPackage(): Observable<any>{
    return this.http.get(this.baseUrl + "packages", { headers: this.headers })
  }
}
