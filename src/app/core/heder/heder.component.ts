import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent {
  constructor(private authService: AuthService, private router: Router) { }
  
  auth = this.authService;
  get isAuth(): boolean {return this.authService.isAuth}
  
  logout(){
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }  
}