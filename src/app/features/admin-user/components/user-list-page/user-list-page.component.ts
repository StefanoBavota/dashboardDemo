import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fromFiltersToRequestUser } from 'src/app/core/adapters';
import { User } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { UserService } from '../../services/user.service';
import { UserFilters } from './../../model/filter.model';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss'],
})
export class UserListPageComponent implements OnInit {
  users: User[] = [];

  success: boolean = true;

  filters: UserFilters = {
    emailSearch: '',
    filterByRole: '',
  };

  offset: number = 0;
  limit: number = 10;
  totalPages: number = 1;
  actualPage: number = 1;

  constructor(
    private data: DataService,
    public userService: UserService,
    private router: Router,
    private modalService: NgbModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.data
      .getUsers(fromFiltersToRequestUser(this.filters, this.limit, this.offset))
      .subscribe((res) => {
        this.users = res.data;
        console.log('users', this.users);
        this.totalPages = Math.ceil(res.total / this.limit);
        console.log('totalPages', this.totalPages);
      });
  }

  onPageClick(page: number) {
    this.offset = (page - 1) * this.limit;
    this.actualPage = page;
    this.getUsers();
  }

  onPageSizeChange(size: number) {
    this.limit = size;
    this.getUsers();
  }

  onFiltersChange(filters: UserFilters) {
    console.log('filters', filters);
    this.filters = filters;
    this.getUsers();
  }

  onClickEdit(user: User) {
    this.userService.setUser(user);
    this.router.navigateByUrl('section/user/edit/' + user.id);
  }

  onClickDelete(user: User) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.item = `${user.id} - ${user.firstName}`;

    modalRef.result.then((modalRes) => {
      if (modalRes) {
        console.log('aaaa');
        this.toastService.show(
          'Utente rimosso',
          ` L'utente ${user.id}  ${user.firstName} ${user.lastName} è stato rimosso`,
          true
        );
        this.data.deleteUser(user).subscribe((res) => {
          this.getUsers();
        });
      }
    });
  }

  onClickNew() {
    this.userService.resetService();
    this.router.navigateByUrl('section/user/new');
  }
}
