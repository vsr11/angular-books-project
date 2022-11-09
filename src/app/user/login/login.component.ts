import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model!:any;
  constructor(private http: HttpClient) { 
    this.model={
      email: '',
      password: '',
      // data: {}
  }
  }

  ngOnInit(): void {
  }

  login(){
    // console.log(this.model);
    this.http.post('http://localhost:5000/signin', this.model)
    .subscribe((data: any)=>{
      if(localStorage.getItem('userData')){
        return;
      } else {
        localStorage.setItem('userData', JSON.stringify({data}));
      }
      console.log(localStorage.getItem('userData'))
    })
  }

}
