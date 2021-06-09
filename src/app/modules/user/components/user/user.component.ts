import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import User from "../../model/user";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() singleUserDetail: EventEmitter<User> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDetails(user: User) {
      this.singleUserDetail.emit(user);
  }

}
