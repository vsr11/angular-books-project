import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent {
<<<<<<< Updated upstream
  constructor(private auth: AuthService,private router:Router) { }
  isAuth(){
    return JSON.parse(this.auth.user!);
  }
=======
  auth = this.authService;
  isAuth = this.authService.isAuth;
>>>>>>> Stashed changes
  
  constructor(private authService: AuthService,private router:Router) { }

  logout(){
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }  
}