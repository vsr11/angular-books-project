import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  x:any;
  
  setOneUser(d:any){
    this.x = d;
  }

  getOne(id:any){
    if(!id){
      return;
    }
    return this.http.get('http://localhost:5000/users/' + id)
  }
  
  getUser(){
    let user:any = localStorage.getItem('userData');
    user = JSON.parse(user!);
    user = user.data.user;
    return user;
  }

  updateUser(userId: number, newData: any){
    return this.http.patch('http://localhost:5000/users/' + userId, newData);
  }
}