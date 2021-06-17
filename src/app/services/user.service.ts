import { Injectable } from '@angular/core';

export interface users {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: users[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "role": "admin",
      "status": "active"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "role": "admin",
      "status": "active"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "role": "admin",
      "status": "active"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "role": "admin",
      "status": "active"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "role": "admin",
      "status": "active"
    },
    
  ]

  constructor() { }

  addUser(user:any){
    console.log(user);
    this.userList.push(user);
    
  }
  editUser(user : users){
    const index = this.userList.findIndex(c=>c.id === user.id);
    this.userList[index] = user ;
  }
  deleteUser(id : number){
    const user = this.userList.findIndex(c=>c.id == id)
    this.userList.splice(user,1);
  }

}
