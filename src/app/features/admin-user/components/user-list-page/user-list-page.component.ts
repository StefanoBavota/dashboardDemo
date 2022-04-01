import { Router } from '@angular/router';
import { UserFilters } from './../../model/filter.model';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { fromFiltersToRequestUser } from 'src/app/core/adapters';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {

  users: User[] = [];

  success: boolean = true;

  filters: UserFilters = {
    emailSearch: '',
    filterByRole: 'All'
  }


  skip: number = 0;
  take: number = 10;
  totalPages: number = 1;
  actualPage: number = 1;

  constructor(private data: DataService, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.data.getUsers(fromFiltersToRequestUser(this.filters, this.take, this.skip)).subscribe(res => {
      if (!res) {
        this.success = false;
      }
      this.users = res.data;
      console.log('users', this.users);
      this.totalPages = Math.ceil(res.total / this.take);
      console.log('totalPages', this.totalPages);
    })
  }


  onPageClick(page: number) {
    this.skip = (page - 1) * this.take;
    this.actualPage = page;
    this.getUsers();
  }

  onPageSizeChange(size: number) {
    this.take = size;
    this.getUsers();
  }

  onFiltersChange(filters: UserFilters) {
    console.log('filters', filters);
    this.filters = filters;
    this.getUsers();
  }

  onClickEdit(user: User) {
    this.userService.setUser(user);
    this.router.navigateByUrl('user/edit/' + user.id)
  }

}
