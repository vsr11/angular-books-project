import { Injectable } from '@angular/core';
import { CanActivate,  Router} from '@angular/router';
import { AuthService } from '../../user/auth.service';
@Injectable({
  providedIn: 'root'
})
export class isLoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){};
  canActivate(): boolean {
    if (this.authService.isAuth){
      return true
    } else {
      this.router.navigate(['/']);
      return false;
      
    }
  }
}
