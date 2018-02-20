import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/User';
import { Http, Response  } from '@angular/http';
import { PagerService } from '../../Services/PagerService';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as _ from 'underscore';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  constructor(
  	private userService: UserService,
    private http: Http,
    private pagerService: PagerService
  ) { }

    users: User[];

  // array of all items to be paged
    private allItems: any;
 
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUserList('','','','')
            .map((response: Response) => response.json())
            .subscribe(data => {
                // set items to json response
                this.allItems = data;
                this.users = data.response;
                console.log('user:', this.users);
                console.log('data:', this.allItems);
                // initialize to page 1
                this.setPage(1);
            });
  }
  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.userService.getUserList('','', page-1,'')
            .map((response: Response) => response.json())
            .subscribe(data => {
                // set items to json response
                this.allItems = data;
                this.users = data.response;
                console.log('user:', this.users);
                console.log('data:', this.allItems);
                // initialize to page 1
                /*this.setPage(page);*/
            });
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.totalNoOfItems, page);
 
        // get current page of items
        this.pagedItems = (this.allItems.response).slice(this.pager.startIndex, this.pager.endIndex + 1);
    }


}
