import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fromFiltersToRequestClient } from 'src/app/core/adapters';
import { Client } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { ClientFilters } from '../../model/filter.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.scss'],
})
export class ClientListPageComponent implements OnInit {
  filters: ClientFilters = {
    born: 0,
    cardYear: 0,
    active: '-',
    search: '',
  };

  clients: Client[] = [];

  offset: number = 0;
  limit: number = 10;
  totalPages: number = 1;
  actualPage: number = 1;

  constructor(
    private data: DataService,
    private clientService: ClientService,
    private router: Router,
    private modalService: NgbModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.data
      .getClients(
        fromFiltersToRequestClient(this.filters,  this.limit, this.offset)
      )
      .subscribe((res) => {
        this.clients = res.data;
        this.totalPages = Math.ceil(res.total / this.limit);
        console.log('totalPages', this.totalPages);
      });
  }

  onPageClick(page: number) {
    this.offset = (page - 1) * this.limit;
    this.actualPage = page;
    this.getClients();
  }

  onPageSizeChange(size: number) {
    this.limit = size;
    this.getClients();
  }

  onFiltersChange(filters: ClientFilters) {
    console.log('filters', filters);
    this.filters = filters;
    this.getClients();
  }

  onClickEdit(client: Client) {
    this.clientService.setClient(client);
    this.router.navigateByUrl('client/edit/' + client.id);
  }

  onClickNewClient() {
    this.clientService.resetService();
    this.router.navigateByUrl('client/new');
  }

  onClickDelete(client: Client) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.item = `${client.id}-${client.name} ${client.surname}`;

    modalRef.result.then((modalRes) => {
      if (modalRes) {
        console.log('aaaa');
        this.toastService.show(
          'Cliente rimosso',
          `Il cliente ${client.id}-${client.name} ${client.surname} è stato rimosso`,
          true
        );
        this.data.deleteClient(client).subscribe((res) => {
          this.getClients();
        });
      }
    });
  }
}
