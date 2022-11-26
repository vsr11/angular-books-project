import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';

import { IUser } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
model!:any;
err1:any;

  constructor(private http: HttpClient,private router: Router) { 
    this.model={
      email: '',
      password: '',
      repeatPassword:'',
      name: '',
      role: '',
      id: 0
    
  }
  }
  register(){
    if(this.model.password !== this.model.repeatPassword){
      this.err1 = 'Both passwords must match';
      return;
    }
    delete this.model['repeatPassword']
    this.http.post('http://localhost:5000/users', this.model)
    .subscribe(
      ()=>this.router.navigate(['/login']),
      (e)=>{this.err1=e.error}
      )
  }
}