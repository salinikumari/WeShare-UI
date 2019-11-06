import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Output() loginAuthenticated = new EventEmitter<boolean>();

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onLogin(form : NgForm){
    if (!form.valid)
      return;
    localStorage.setItem('userName', form.value.userName);
    this.loginAuthenticated.emit(true);
  }
}
