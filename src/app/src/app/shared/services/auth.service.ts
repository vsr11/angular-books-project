import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = localStorage.getItem('userData');
  constructor() { }
}