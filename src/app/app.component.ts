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
    if (localStorage.getItem('userName'))
      this.isLoggedIn = true;
  }

  onLoginAuthenticated(loginSuccess:boolean){
    this.isLoggedIn = loginSuccess;
    this.router.navigate(['']);
  }

  onLogout(){
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['']);
  }
}
