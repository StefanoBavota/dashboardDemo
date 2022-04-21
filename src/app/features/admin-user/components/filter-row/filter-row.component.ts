import { UserFilters } from './../../model/filter.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-filter-row',
  templateUrl: './filter-row.component.html',
  styleUrls: ['./filter-row.component.scss']
})
export class FilterRowComponent implements OnInit {

  @Input() filters?: UserFilters;
  @Output() filtersEmitter = new EventEmitter<UserFilters>();


  @Input() pageSize: number = 10;
  @Output() pageSizeEmitter = new EventEmitter<number>();


  filterByEmail: string = "";
  filterByRole: string = "All";
  filterByRoleOptions: string[] = ['All', 'admin', 'operator'];

  searchEmailControl = new FormControl(this.filterByEmail);
  filterByRoleControl = new FormControl(this.filterByRole);



  constructor() { }

  ngOnInit(): void {
    this.setFilters();
    this.setFormControls();
    this.listenFormControls().subscribe(res => {
      console.log('subscribe', res);
      this.filtersEmitter.emit(res);
    })

  }

  setFilters() {
    if(this.filters) {
      this.filterByEmail = this.filters.emailSearch;
      this.filterByRole = this.filters.filterByRole;
    }

}


setFormControls() {
  this.searchEmailControl = new FormControl(this.filterByEmail);
  this.filterByRoleControl = new FormControl(this.filterByRole);

}


listenFormControls() {
  return merge(
    this.searchEmailControl.valueChanges,
    this.filterByRoleControl.valueChanges,
  ).pipe(
    tap(x => console.log('pipe', x)),
    switchMap(() => of({
      emailSearch: this.searchEmailControl.value,
      filterByRole: this.filterByRoleControl.value,
    }))
  )

}

onChangePageSize(size: number) {
  this.pageSizeEmitter.emit(size);
}

}
