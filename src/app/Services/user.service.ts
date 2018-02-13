
import { config } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  getUsers() {
    return this.http.get(config.serverApiUrl + 'users');
  }
  createUser(value) {
    return this.http.post(config.serverApiUrl + 'users', value); 
  }

}
