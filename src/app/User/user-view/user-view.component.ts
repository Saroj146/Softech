import { UserService } from '../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.viewUser();
  }
  viewUser() {
    this.userService.getUsers().subscribe(
      data => {
        console.log(data);
      },
      err => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err}`);
        }
      }
    );
  }

}
