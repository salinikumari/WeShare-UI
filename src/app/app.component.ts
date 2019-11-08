import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = true;

  constructor(){
    localStorage.clear();
    console.log("cleared");
  }

  onLoginAuthenticated(loginSuccess:boolean){
    this.isLoggedIn = loginSuccess;
  }

  onLogout(){
    this.isLoggedIn = false;
  }
}
