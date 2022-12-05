import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../../user/auth.service';
@Injectable({
  providedIn: 'root'
})
export class isAdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){};
  canActivate(){
    if (this.authService.isAdmin){
      return true
    } else {
      this.router.navigate(['/']);
      return false;
     }
  }
}

