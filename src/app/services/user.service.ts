import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: User[]=[];

  constructor() { }

  addUser(user : User){
    this.userList.push(user);
  }

  updateUser (index : number, user : User){
    if ((index < 0) || (index >= this.userList.length))
      return;
    this.userList[index] = user;
  }

  removeUser(index : number){
    if ((index < 0) || (index >= this.userList.length))
      return;
    this.userList.splice (index, 1);
  }

  getUsers(){
    return this.userList.slice();
  }

  getUser(index : number){
    if ((index < 0) || (index >= this.userList.length))
      return null;
    return this.userList[index];
  }
}
