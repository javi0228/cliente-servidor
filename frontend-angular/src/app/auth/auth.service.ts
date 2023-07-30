import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:8000/api';
  options: any;

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
     * @param e The email address
     * @param p The password string
     */
  login(e: string, p: string): Observable<any> {
    return this.http.post(this.apiUrl + '/login', {
      email: e,
      password: p,
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
