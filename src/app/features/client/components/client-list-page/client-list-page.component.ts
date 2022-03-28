import { Component, OnInit } from '@angular/core';
import { ClientFilters } from '../../model/filter.model';

@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.scss']
})
export class ClientListPageComponent implements OnInit {

  filters: ClientFilters = {
    bornYear: 0,
    cardYear: 0,
    active: '-',
    search: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFiltersChange(filters: ClientFilters) {
    console.log('filters', filters);
    this.filters = filters;
  }

}
