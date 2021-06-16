import { Component, OnInit } from '@angular/core';
import { users, UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: any[];
  searchField: any;
  viewData : any;
  

  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.users = this.userService.userList;
  }
  view(user:any){
    this.viewData = user;
    console.log(user)   
  }
  delete(id :number ){
    this.userService.deleteUser(id);
  }


}
