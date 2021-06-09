import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from "./services/user.service";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {DataTransferService} from "./services/data-transfer.service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
    imports: [
        CommonModule,
    ],
  exports: [
    UsersComponent,
    UserComponent
  ],
    providers: [UserService, DataTransferService]
})
export class UserModule { }
