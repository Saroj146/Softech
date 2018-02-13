import { UserService } from '../../Services/user.service';
import { User } from '../../Models/User';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users: User;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.viewUser();
  }
  viewUser() {
    this.userService.getUsers().subscribe(
      data => {
        console.log('data: ', data);
        const d = JSON.parse(JSON.stringify(data['response']));
        this.users = d;
        /*this.users= data.response;*/
        console.log('users',this.users);
      },
      (err: HttpErrorResponse) => {
          console.log(err.error);
        }
    );
  }

}
