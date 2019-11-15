import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as Util from  '../common/util';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Output() loginAuthenticated = new EventEmitter<boolean>();
errorMsg: string = null;
isLoading:boolean = false;

  constructor(private router : Router, private http: HttpClient) { 
    localStorage.clear();
  }

  ngOnInit() {
  }

  onLogin(form : NgForm){
    if (!form.valid)
      return;
    this.isLoading = true;
    const data = { "userName": form.value.userName, "password": form.value.password};
    this.http.post(Util.LOGIN_REQ, data).subscribe(response=>{
      localStorage.setItem('userName', response['userName']);
      localStorage.setItem('userId', response['id']);
      this.loginAuthenticated.emit(true);
      this.isLoading = false;
    }, errorResponse=>{
        this.errorMsg = errorResponse.error['error'];
        this.isLoading = false;
      });
  }
}
