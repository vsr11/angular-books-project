import { Component } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent {
  constructor(private authService: AuthService){}
  isAuth = this.authService.isAuth;
  logout = this.authService.logout;
}
