import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

name='';
email='';
password='';
repeatPassword='';


  ngOnInit(): void {
    
  }

  onSubmit(data: NgForm){
    delete data.value.repeatPassword;
    console.log(data.value)
    this.http.post('http://localhost:5000/users', JSON.stringify(data.value), {headers: new HttpHeaders({'Content-Type': 'application/json'})})
    .subscribe((d)=>{console.log(d)})
    // this.http.post('http://localhost:5000/users', data.value)

  }
}