import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, of, switchMap } from 'rxjs';
import { ClientFilters } from '../../model/filter.model';
import { getYears } from './filter-row-utils';

@Component({
  selector: 'app-filter-row',
  templateUrl: './filter-row.component.html',
  styleUrls: ['./filter-row.component.scss']
})
export class FilterRowComponent implements OnInit {

  @Input() filters?: ClientFilters;
  @Output() filtersEmitter = new EventEmitter<ClientFilters>();

  @Input() pageSize: number = 10;
  @Output() pageSizeEmitter = new EventEmitter<number>();

  bornYear: number = 0;
  cardYear: number = 0;
  active: string = '-';
  search: string = '';

  bornDateYears: string[] = getYears(120, false);
  cardDateYears: string[] = getYears(40, false);
  activeOptions: string[] = ['-', 'SI', 'NO'];

  bornYearControl = new FormControl(this.bornYear);
  cardYearControl = new FormControl(this.cardYear);
  activeControl = new FormControl(this.active);
  searchControl = new FormControl(this.search);

  constructor() { }

  ngOnInit(): void {
    this.setFilters();
    this.setFormControls();
    this.listenFormControls().subscribe(res => {
      this.filtersEmitter.emit(res);
    })
  }

  setFilters() {
    if(this.filters) {
      this.bornYear = this.filters.bornYear;
      this.cardYear = this.filters.cardYear;
      this.active = this.filters.active;
      this.search = this.filters.search;

      this.bornDateYears = getYears(120, this.bornYear !== 0);
      this.cardDateYears = getYears(40, this.cardYear !== 0);
    }
  }

  setFormControls() {
    this.bornYearControl = new FormControl(this.bornYear);
    this.cardYearControl = new FormControl(this.cardYear);
    this.activeControl = new FormControl(this.active);
    this.searchControl = new FormControl(this.search);
  }

  listenFormControls() {
    return merge(
      this.bornYearControl.valueChanges,
      this.cardYearControl.valueChanges,
      this.activeControl.valueChanges,
      this.searchControl.valueChanges
    ).pipe(
      switchMap(() => of({
        search: this.searchControl.value,
        bornYear: this.bornYearControl.value,
        cardYear: this.cardYearControl.value,
        active: this.activeControl.value
      }))
    )
  }

  onChangePageSize(size: number) {
    this.pageSizeEmitter.emit(size);
  }
}
