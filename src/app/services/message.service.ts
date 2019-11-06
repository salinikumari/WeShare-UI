import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
private msgList: any[]=[];

  constructor() { }

  addMessage(msg : Object){
    this.msgList.push(msg);
  }

  getMessages(myMsg : boolean){
    if (myMsg)
      return this.msgList.filter(msg=>msg.userName.includes(localStorage.getItem('userName')));
    return this.msgList.filter(msg=>!msg.userName.includes(localStorage.getItem('userName')));
  }
}
