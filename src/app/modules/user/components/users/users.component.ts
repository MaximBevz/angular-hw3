import { Component, OnInit } from '@angular/core';
import User from "../../model/user";
import {UserService} from "../../services/user.service";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user_details: User;
  users: User[];
  constructor(private userService: UserService, private dataTransfer: DataTransferService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  userDetails(user: User) {
    this.user_details = user;
  }

}
