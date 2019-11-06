import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent implements OnInit {
myMsg : boolean;
msgList =[];

  constructor(private router : ActivatedRoute, private msgSvc : MessageService) {
  }

  ngOnInit() {
    this.myMsg = this.router.snapshot.queryParams['myMsg'] === "true" ? true : false;
    this.router.queryParams.subscribe((params)=>{
        this.myMsg = params['myMsg'] === "true" ? true : false;
        this.msgList = this.msgSvc.getMessages(this.myMsg);
      });
    this.msgList = this.msgSvc.getMessages(this.myMsg);
  }
}
