
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IUser } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
model!:any;

  constructor() { 
    this.model={
      email: '',
         password: '',
         repeatPassword:'',
      name: '',
      booksRead: [],
      role: '',
      id: 0
    
  }
  }
  register(){
    console.log(this.model);
    
    
  }
  
}
  // onSubmit(data: NgForm){
  //   delete data.value.repeatPassword;
  //   console.log(data)
  //   this.http.post('http://localhost:5000/users', JSON.stringify(data.value), {headers: new HttpHeaders({'Content-Type': 'application/json'})})
  //   .subscribe((d)=>{console.log(d)})
  //   // this.http.post('http://localhost:5000/users', data.value)

  // }
