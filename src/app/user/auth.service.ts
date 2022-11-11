import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  user() {return localStorage.getItem('userData');}  
  }
