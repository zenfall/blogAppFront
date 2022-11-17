import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpHeaders = new HttpHeaders();
  private BASE_URL = `${environment.getBaseUrl()}/api/v1/users`;

  constructor(private http: HttpClient) { 
    this.httpHeaders.set("Content-Type", "application/json");
    this.httpHeaders.set("Accept", "application/json");
  }

  inscription(credentials:any): Observable<any> {
    return this.http.post(this.BASE_URL + '/createUser', credentials, 
    { headers: this.httpHeaders });
  }

  modifierUser(credentials:any): Observable<any> {
    
    return this.http.put(this.BASE_URL + '/modifierUser', credentials, 
    { headers: this.httpHeaders });
  }

  getUserLogin(): Observable<any> {
    return this.http.get(this.BASE_URL +'/getUserLogin',{ headers: this.httpHeaders });
  }

  login(credentials:any): Observable<any> {
    return this.http.post(this.BASE_URL + '/login', credentials, 
    { headers: this.httpHeaders });
  }

}
