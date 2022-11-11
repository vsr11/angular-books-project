import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent {
  constructor(private auth: AuthService,private router:Router) { }
  isAuth(){return JSON.parse(this.auth.user()!);}
  logout(){
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }
  
  
  
}
