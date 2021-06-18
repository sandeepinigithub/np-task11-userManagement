import { AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: any[];
  searchField: any;
  viewData: any;
  formHeading: string;
  fBtnText: string;
  editFlag: boolean = true;
  userForm: FormGroup;



  constructor(private userService: UserService) { 
    this.users = this.userService.userList;
  }


  ngOnInit(): void {

    //Form Add 
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('',[Validators.required,Validators.minLength(4)]),
      username: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl(''),
      status: new FormControl(''),
    });
  }

  get form() { return this.userForm.controls };

  view(user: any) {
    this.viewData = user;
    console.log(user)
  }


  delete(id: number) {
    this.userService.deleteUser(id);
  }
  addOrEdit(user?: any) {
    if (user != null) {
      this.editFlag = true;
      this.formHeading = "Edit User Details";
      this.fBtnText = "Save Changes";
      console.log(user);
      this.userForm.setValue(user);
      // this.userService.editUser(user);
    }
    if (!this.editFlag) {
      this.userService.addUser(this.userForm.value);
    }

  }

  saveChanges(){
    this.userService.editUser(this.userForm.value);
  }

  addHeading() {
    this.formHeading = "Add User";
    this.fBtnText = "Add";
    this.editFlag = false;

  }

}
