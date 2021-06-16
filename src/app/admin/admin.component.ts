import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: any[];
  searchField: any;

  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.users = this.userService.userList;
  }
  delete(id :number ){
    this.userService.deleteUser(id);
  }


}
