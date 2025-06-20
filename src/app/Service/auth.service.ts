import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user/user';
import { Token } from '../login/token/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( ) { }

  
  // isUserAuthenticated : boolean = false;
  // authenticatedUser : string = '';

  // setAuthenticatedUser(authenticated : boolean, username : string) {
  //   this.isUserAuthenticated = authenticated;
  //   this.authenticatedUser = username;
  // }

  // getAuthenticatedUser() {
  //   this.authenticatedUser;
  // }

  // checkAuthenticated() {
  //   this.isUserAuthenticated;
  // }
}
