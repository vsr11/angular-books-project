import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private auth: AuthService,private router:Router) { }
  
  user(){
    return localStorage.getItem('userData');
  }
  
  get isAuth(){return JSON.parse(this.auth.user()!);}
  
  logout(){
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }
  }
