import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getter();
  }
  processForm(){
    console.log(this.user);
    if(this.user.id == undefined){
      this.userService.createUser(this.user).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/']);
      });
    }
    else
    {
      this.userService.updateUser(this.user).subscribe(res=>{
        this.router.navigate(['/']);
        console.log(res);
      });
    }
  }
}
