import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.findAll().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }

  deleteUser(user: User){
    this.userService.deleteUser(user.id).subscribe(res=>{
      console.log(res);
      this.users.splice(this.users.indexOf(user), 1);
    });
  }

  updateUser(user: User){
    this.userService.setter(user);
    this.router.navigate(['op']);
  }
  newUser(){
    let user = new User();
    this.userService.setter(user);
    this.router.navigate(['op']);
  }

}
