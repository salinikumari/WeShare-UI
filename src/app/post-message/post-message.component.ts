import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as Util from  '../common/util';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.css']
})
export class PostMessageComponent implements OnInit {
@ViewChild('changeUser') changeUser : any;
messages :string[] = [];
isLoading:boolean = false;
statusMsg:string = null;
errorMsg:string = null;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onPost(form : NgForm){
    if (!form.valid)
      return;
   this.isLoading = true;
   this.statusMsg ="Please wait...";
   this.errorMsg=null;
   const data = {
      "userId": localStorage.getItem('userId'),
      "message":form.value.message,
    };
    this.http.post(Util.POST_MSG_REQ, data).subscribe(response=>{
      this.messages.push(form.value.message);
      this.statusMsg = response['message'];
      form.controls['message'].setValue('');
      this.isLoading = false;
    }, errorResponse=>{
        this.errorMsg = "Server Error.";
        this.statusMsg=null;
        this.isLoading = false;
      });
  }

  onClear(){
    this.statusMsg=null;
    this.errorMsg=null;
    this.isLoading=false;
  }
}
