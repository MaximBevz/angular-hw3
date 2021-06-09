import { Component, OnInit } from '@angular/core';
import {DataTransferService} from "../../modules/user/services/data-transfer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logg: string;
  constructor(private dataTransfer: DataTransferService) {
    this.dataTransfer.store.subscribe(value => this.logg = value)
  }

  ngOnInit(): void {
  }

}
