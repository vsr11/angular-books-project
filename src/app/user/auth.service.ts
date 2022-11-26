import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router:Router) { }
  
  get user() {
    return localStorage.getItem('userData');
  }
  
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

<<<<<<< Updated upstream
get getReadList(){
  return this.isAuth.data.user.booksRead;
}
=======
>>>>>>> Stashed changes
}