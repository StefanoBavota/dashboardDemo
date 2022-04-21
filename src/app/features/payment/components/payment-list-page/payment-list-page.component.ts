import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fromFiltersToRequestPayment } from 'src/app/core/adapters/payment.adapter';
import { Page, Payment } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { PaymentFilters } from 'src/app/features/client/model/filter.model';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-payment-list-page',
  templateUrl: './payment-list-page.component.html',
  styleUrls: ['./payment-list-page.component.scss'],
})
export class PaymentListPageComponent implements OnInit {
  filters: PaymentFilters = {
    search: '',
    client: '',
    area: '',
    date: '',
  };

  payments: Payment[] = [];

  offset: number = 0;
  limit: number = 10;
  totalPages: number = 1;
  actualPage: number = 1;

  constructor(
    private dataService: DataService,
    private modalService: NgbModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getPayments();
  }

  onClickDelete(payment: Payment) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.item = `${payment.clientName} ${payment.clientSurname}`;

    modalRef.result.then((modalRes) => {
      if (modalRes) {
        this.toastService.show(
          'Pagamento',
          `${payment.clientName} ${payment.clientSurname} rimosso con successo`,
          true
        );
        this.dataService.deletePayment(payment.id).subscribe((res) => {
          this.getPayments();
        });
      }
    });
  }

  getPayments() {
    this.dataService
      .getPayments(
        fromFiltersToRequestPayment(this.filters, this.limit, this.offset)
      )
      .subscribe((res: Page) => {
        this.payments = res.data;
        this.totalPages = Math.ceil(res.total / this.limit);
        console.log('Payments', this.payments, 'totalPages', this.totalPages);
      });
  }


  onFiltersChange(filters: PaymentFilters) {
    console.log('filters', filters);
    this.filters = filters;
    this.getPayments();
  }



  onPageClick(page: number) {
    this.offset = (page - 1) * this.limit;
    this.actualPage = page;
    this.getPayments();
  }


  onPageSizeChange(size: number) {
    this.limit = size;
    this.getPayments();
  }

}
