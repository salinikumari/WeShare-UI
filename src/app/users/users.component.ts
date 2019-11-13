import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userList :User[];

  constructor(private userSvc :UserService) { }

  ngOnInit() {
    this.userList = this.userSvc.getUsers();
  }

  onDeleteUser(index:number){
    this.userSvc.removeUser(index);
    this.userList = this.userSvc.getUsers();
  }
}
