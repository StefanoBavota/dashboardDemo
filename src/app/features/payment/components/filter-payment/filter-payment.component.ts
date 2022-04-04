import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaymentFilters } from 'src/app/features/client/model/filter.model';
import { merge, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-filter-payment',
  templateUrl: './filter-payment.component.html',
  styleUrls: ['./filter-payment.component.scss'],
})
export class FilterPaymentComponent implements OnInit {
  @Input() filters?: PaymentFilters;
  @Output() filtersEmitter = new EventEmitter<PaymentFilters>();

  @Input() pageSize: number = 10;
  @Output() pageSizeEmitter = new EventEmitter<number>();

  search: string = '';
  area: string = '';
  client: string = '';
  date: string = '';

  searchControl = new FormControl(this.search);
  areaControl = new FormControl(this.area);
  clientControl = new FormControl(this.client);
  dateControl = new FormControl(this.date);

  constructor() {}

  ngOnInit(): void {
    this.setFilters();
    this.setFormControls();
    this.listenFormControls().subscribe((res) => {
      console.log('subscribe', res);
      this.filtersEmitter.emit(res);
    });
  }

  setFilters() {
    if (this.filters) {
      this.search = this.filters.search;
      this.area = this.filters.area;
      this.client = this.filters.client;
      this.date = this.filters.date;
    }
  }

  setFormControls() {
    this.searchControl = new FormControl(this.search);
    this.areaControl = new FormControl(this.area);
    this.clientControl = new FormControl(this.client);
    this.dateControl = new FormControl(this.date);
  }

  listenFormControls() {
    return merge(
      this.searchControl.valueChanges,
      this.areaControl.valueChanges,
      this.clientControl.valueChanges,
      this.dateControl.valueChanges
    ).pipe(
      tap((x) => console.log('pipe', x)),
      switchMap(() =>
        of({
          search: this.searchControl.value,
          area: this.areaControl.value,
          client: this.clientControl.value,
          date: this.dateControl.value,
        })
      )
    );
  }

  onChangePageSize(size: number) {
    this.pageSizeEmitter.emit(size);
  }
}
