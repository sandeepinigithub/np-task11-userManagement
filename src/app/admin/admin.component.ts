import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users : any[] ;

  constructor(private userService : UserService) {
    this.users = this.userService.userList;
   }

  ngOnInit(): void {

  }

}
