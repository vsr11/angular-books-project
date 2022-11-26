import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router:Router) { }
  
  // get user(): any {
  //   return localStorage.getItem('userData');
  // }
  
  

  get isAuth(): boolean{
    let x:any = localStorage.getItem('userData');
    if(!x){return false;}
    // return Boolean(JSON.parse(x.data.id));
    return true;
  }

  getAuth(){
    let x:any = localStorage.getItem('userData');
    return JSON.parse(x);
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

get getReadList(){
  return this.getAuth().data.user.booksRead;
}
}