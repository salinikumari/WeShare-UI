import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.css']
})
export class PostMessageComponent implements OnInit {
@ViewChild('changeUser') changeUser : any;

  messages :string[] = [];

  constructor(private msgSvc : MessageService) { }

  ngOnInit() {
  }

  onPost(form : NgForm){
    var userName;
    if (!form.valid)
      return;
    if(this.changeUser.nativeElement.checked)
      userName = form.value.userName;
    else
      userName = localStorage.getItem('userName');
   const msg = {
      "userName": userName,
      "message":form.value.message,
      "date": "" + new Date()
    };
    this.msgSvc.addMessage(msg);
    this.messages.push(form.value.message);
    form.controls['message'].setValue('');
  }
}
