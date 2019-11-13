import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private router: Router){
    localStorage.clear();
  }

  onLoginAuthenticated(loginSuccess:boolean){
    this.isLoggedIn = loginSuccess;
  }

  onLogout(){
    this.isLoggedIn = false;
    localStorage.clear();
  }
}
