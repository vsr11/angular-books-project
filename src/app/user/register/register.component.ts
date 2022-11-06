import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

name='';
email='';
password='';
repeatPassword='';


  ngOnInit(): void {
    console.log('name', name)
  }

}
