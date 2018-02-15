import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/User';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	
  ceiling: number;
	p: number = 1;
  pages:Array<number> = [];
  totalPages: number;
  page: number;
  sort: string = '';
  size: number;
	search: string = '';
	users: User[];
  sorts: Array<Object> = [
    { value: 'ASC', sortName: 'Ascending' },
    { value: 'DESC', sortName: 'Descending' }
  ];

  constructor(
  	private userService: UserService
  ) { }

  ngOnInit() {
  	this.onSubmit({});
  }
  onSubmit( search: any){
    this.pages = [];
    this.search = search.firstName;
    this.size = search.size;
    this.page = search.page;
  	console.log('search value:', this.search, this.size, this.page, this.sort);
  	this.userService.getUserList(this.search, this.size, this.page, this.sort).subscribe(
  		data => {
        console.log('data: ', data);
        const d = JSON.parse(data['_body']);
        this.users= d.response;
        this.size = d.noOfItems;
        this.page = d.pageNumber;
        this.totalPages = d.noOfPages;
        for (var i = 0; i < this.totalPages; i++) {
          this.pages.push(i);  
          this.ceiling = i;
        }

      },
      (err: HttpErrorResponse) => {
          console.log(err.error);
      }
  	);
  }
  setSortOrder(sort){
    this.sort = sort;
  }
  isBase(){
    if (this.page==this.pages[0]) {
      return true;
    }
    return false;
  }
  isCeiling(){
    if (this.page==this.pages[this.ceiling]) {
      return true;
    }
    return false;
  }

}
