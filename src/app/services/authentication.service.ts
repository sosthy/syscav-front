import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import {THEMORA_URL} from '../models/config.model';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  onLogin(user: User) {
    return this.http.post(THEMORA_URL + '/login', user, {observe: 'response'});
  }
}
