import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, of, switchMap, tap } from 'rxjs';
import { ClientFilters } from '../../model/filter.model';
import { getYears } from './filter-row-utils';

@Component({
  selector: 'app-filter-row',
  templateUrl: './filter-row.component.html',
  styleUrls: ['./filter-row.component.scss']
})
export class FilterRowComponent implements OnInit, OnChanges {

  @Input() filters?: ClientFilters;
  @Output() filtersEmitter = new EventEmitter<ClientFilters>();

  @Input() pageSize: number = 10;
  @Output() pageSizeEmitter = new EventEmitter<number>();

  born: number = 0;
  cardYear: number = 0;
  active: string = '-';
  search: string = '';

  bornDateYears: string[] = getYears(120, false);
  cardDateYears: string[] = getYears(40, false);
  activeOptions: string[] = ['-', 'SI', 'NO'];

  bornYearControl = new FormControl(this.born);
  cardYearControl = new FormControl(this.cardYear);
  activeControl = new FormControl(this.active);
  searchControl = new FormControl(this.search);


  constructor() { }

  ngOnChanges(): void {
  }

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
      this.born = this.filters.born;
      this.cardYear = this.filters.cardYear;
      this.active = this.filters.active;
      this.search = this.filters.search;

      this.bornDateYears = getYears(120, this.born !== 0);
      this.cardDateYears = getYears(40, this.cardYear !== 0);
    }
  }

  setFormControls() {
    this.bornYearControl = new FormControl(this.born);
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
      tap(x => console.log('pipe', x)),
      switchMap(() => of({
        search: this.searchControl.value,
        born: Number.parseInt(this.bornYearControl.value),
        cardYear: Number.parseInt(this.cardYearControl.value),
        active: this.activeControl.value
      }))
    )
  }

  onChangePageSize(size: number) {
    this.pageSizeEmitter.emit(size);
  }
}
