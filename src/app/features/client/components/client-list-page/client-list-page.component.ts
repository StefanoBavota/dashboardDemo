import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromFiltersToRequestClient } from 'src/app/core/adapters';
import { Client } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { ClientFilters } from '../../model/filter.model';
import { ClientService } from '../../services/client.service';

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

  clients: Client[] = [];

  skip: number = 0;
  take: number = 10;
  totalPages: number = 1;
  actualPage: number = 1;

  constructor(
    private data: DataService,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.data.getClients(fromFiltersToRequestClient(this.filters, this.skip, this.take)).subscribe(res => {
      this.clients = res.data;
      this.totalPages = Math.ceil(res.total / this.take);
      console.log('totalPages', this.totalPages);
    })
  }

  onPageClick(page: number) {
    this.skip = (page-1) * this.take;
    this.actualPage = page;
    this.getClients();
  }

  onPageSizeChange(size: number) {
    this.take = size;
    this.getClients();
  }

  onFiltersChange(filters: ClientFilters) {
    console.log('filters', filters);
    this.filters = filters;
    this.getClients();
  }

  onClickEdit(client: Client) {
    this.clientService.setClient(client);
    this.router.navigateByUrl('client/edit/' + client.id)
  }
}
