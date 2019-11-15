import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as Util from  '../common/util';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent implements OnInit {
myMsg : boolean;
msgList =[];
isLoading:boolean = false;
errorMsg=null;

  constructor(private router : ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.myMsg = this.router.snapshot.queryParams['myMsg'] === "true" ? true : false;
    this.router.queryParams.subscribe((params)=>{
        this.myMsg = params['myMsg'] === "true" ? true : false;
        this.fetchMessages();
      });
      this.fetchMessages();
  }

  fetchMessages(){
    this.isLoading = true;
    this.errorMsg=null;
    let URL: string = this.myMsg ? Util.GET_MY_MSG_REQ : Util.GET_OTHER_MSG_REQ;

    this.http.get(URL + localStorage.getItem('userId')).subscribe(response=>{
      this.msgList=response['content'];
      this.isLoading = false;
    }, errorResponse=>{
      this.isLoading = false;
      this.errorMsg="Server Error";
    })
  }
}
