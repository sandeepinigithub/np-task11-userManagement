import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: any[];
  searchField: any;
  viewData : any;

  userForm : FormGroup ;

  

  constructor(private userService: UserService) {
    this.users = this.userService.userList;
    
  }

  ngOnInit(): void {
    
    //Form Add 
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl(''),
      status: new FormControl(''),
    });
  }
  
  get form() {return this.userForm.controls} ;

  view(user:any){
    this.viewData = user;
    console.log(user)   
  }


  delete(id :number ){
    this.userService.deleteUser(id);
  }
  add(){
    this.userService.addUser(this.userForm.value);
    
  }


}
