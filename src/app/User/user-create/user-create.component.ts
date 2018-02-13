
import { User } from '../../Models/user';
import { UserService } from '../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  user: User;
  constructor(
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }
  onSubmit (form, value: any) {
    console.log('form: vaue=', value);
    this.user = value;
    this.userService.createUser(this.user).subscribe(
      data => {
        console.log(data);
        form.resetForm();
        console.log('Added!', 'Team added successfully.', 'success');
        this.route.navigate(['/users']);
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
