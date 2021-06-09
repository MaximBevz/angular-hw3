import {Component, Input, OnInit} from '@angular/core';
import User from "../../model/user";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user_details: User;
  constructor(private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
  }

  logger(name: string) {
    this.dataTransfer.store.next(name);
  }
}
