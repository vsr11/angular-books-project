import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router:Router) { }
  
  get user() {
    return localStorage.getItem('userData');
  }
  
  get isAuth() {
    return JSON.parse(this.user!);
  }
  
  logout(){
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }
  }
