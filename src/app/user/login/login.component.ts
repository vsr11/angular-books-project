import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model!:any;
  err1:any;
  constructor(private http: HttpClient, private router: Router) { 
    this.model={
      email: '',
      password: '',
       }
  }

  ngOnInit(): void {
  }

  login(){
    this.http.post('http://localhost:5000/signin', this.model)
    .subscribe((data: any)=>{
      if(localStorage.getItem('userData')){
        this.router.navigate(['/']);
      } else {
        localStorage.setItem('userData', JSON.stringify({data}));
        this.router.navigate(['/']);
      }
    },
    (e)=>{this.err1=e.error})
  }
}