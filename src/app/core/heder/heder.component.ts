import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/src/app/shared/services/auth.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {
  isAuth = JSON.parse(this.auth.user!);
  // user = this.auth.user;
  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    console.log(this.isAuth)
  }

}
