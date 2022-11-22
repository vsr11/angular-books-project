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

  get isAdmin(){
    let x:any = localStorage.getItem('userData');
    x = JSON.parse(x);
    return x.data.user.role === 'admin';
  }

get getReadList(){
  return this.isAuth.data.user.booksRead;
}
}