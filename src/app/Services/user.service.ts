import { requestOptionsProvider } from './../default-request-options.service';
import { config } from '../app.config';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
  	private http: Http,
    private httpClient: HttpClient,

  ) { }
  getUsers() {
    return this.httpClient.get(config.serverApiUrl + 'users/1');
  }
  createUser(user) {
    return this.httpClient.post(config.serverApiUrl + 'users', user); 
  }
  getUserList(search){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', '0');
    params.set('search', search);
    let options = new RequestOptions({headers: headers});
    options.search = params;
    return this.http.get(config.serverApiUrl + 'users', options);
  }

}
