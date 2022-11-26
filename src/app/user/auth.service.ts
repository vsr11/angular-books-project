import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router:Router) { }
  
  get user(): any {
    return localStorage.getItem('userData');
  }
  
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  get isAuth() {
    return JSON.parse(this.user!);
=======
  get getAuth():any|undefined{
    return JSON.parse(this.user);
  }

  get isAuth() {
    return JSON.parse(this.user);
>>>>>>> Stashed changes
=======
  getAuth(){
    return JSON.parse(this.user);
  }

  get isAuth() {
    return Boolean(JSON.parse(this.user));
>>>>>>> Stashed changes
  }
  
  logout(){
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }

  get isAdmin(){
    let x: any = localStorage.getItem('userData');
    x = JSON.parse(x);
    return x.data.user.role === 'admin';
  }

<<<<<<< Updated upstream
get getReadList(){
  return this.getAuth().data.user.booksRead;
}
=======
>>>>>>> Stashed changes
}