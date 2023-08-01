import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api';
  private options: any;

  /**
   * Constructor
   * @param http The http client object
   */
  constructor(
    private http: HttpClient
  ) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
  }

  isLogged() {
    return sessionStorage.getItem('token') ? true : false;
  }

  /**
     * Get an access token
     * @param eemail The email address
     * @param pass The password string
     */
  login(email: string, pass: string): Observable<HttpEvent<User[]>> {
    return this.http.post<User[]>(this.apiUrl + '/login', {
      email: email,
      password: pass,
      scope: ''
    }, this.options);
  }
  /**
   * Revoke the authenticated user token
   */
  logout() {
    return this.http.get(this.apiUrl + '/logout', this.options);
  }
}
