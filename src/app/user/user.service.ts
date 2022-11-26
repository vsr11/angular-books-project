import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable()
export class UserService {
  
  constructor(private http: HttpClient) { }
  x:any;
  
setOneUser(d:any){
  this.x=d;
}

  getOne(id:any){
<<<<<<< Updated upstream
    // console.log(id);
=======
    // if(!id){
      // return;
    // }
>>>>>>> Stashed changes
    return this.http.get('http://localhost:5000/users/' + id)
    // .subscribe(d=>this.setOneUser(d));
  }
  
  getUserData():any{
  let x = undefined;
  this.http.get('http://localhost:5000/users/' + this.getUser().id).subscribe(d=>x=d);
  // console.log(this.getUser().id)
  return x;
}

  getUser(){
    let user:any = localStorage.getItem('userData');
    console.log('zzz ', user);
    user = JSON.parse(user!);
    user = user.data.user;
    return user;
  }

  updateUser(userId: number, newData: any){
    return this.http.patch('http://localhost:5000/users/' + userId, newData);
  }
  
  // getOne(id: number){this.http.get('http://localhost:5000/users/' + id).subscribe(d=>this.x = d); return this.x;}
  // getOne(id: any){this.http.get('http://localhost:5000/users/' + id).subscribe(d=>{return d;});}
  // getOne(id: any){return this.http.get('http://localhost:5000/users/' + id).subscribe(d=>this.x=d);}
}