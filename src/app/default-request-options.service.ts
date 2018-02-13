import {Injectable} from '@angular/core';
import {BaseRequestOptions, RequestOptions} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class DefaultRequestOptionsService extends BaseRequestOptions {

  constructor(private cookieService: CookieService) {
    super();
    // Set the default 'Content-Type' header
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('userId', cookieService.get('userId'));
  }
}

export const requestOptionsProvider = {
  provide: RequestOptions, useClass: DefaultRequestOptionsService
};