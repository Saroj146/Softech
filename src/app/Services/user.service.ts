
import { config } from '../app.config';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
  	private http: Http,
    private httpClient: HttpClient,

  ) { }
  getUsers() {
  	const head = new Headers();
  	head.append('Access-Control-Allow-Origin', '*');
    return this.httpClient.get(config.serverApiUrl + 'users/1');
  }
  createUser(user) {
  	/*const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');*/
    console.log(config.serverApiUrl + 'users', 'body:' , user);
    return this.httpClient.post(config.serverApiUrl + 'users', user); 

  }

}
