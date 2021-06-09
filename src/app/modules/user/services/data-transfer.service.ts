import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import User from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  user: User;
  store = new BehaviorSubject<any> ('anonymous');

  constructor() { }
}
