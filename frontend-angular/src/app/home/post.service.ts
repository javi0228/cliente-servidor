import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8000/api';

  /**
   * Constructor
   * @param http The http client object
   */
  constructor(
    private http: HttpClient
  ) {

  };


  getPosts(): Observable<any> {
    return this.http.get<Post[]>(this.apiUrl + '/posts');
  }
}
