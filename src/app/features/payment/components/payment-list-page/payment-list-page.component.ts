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

  skip: number = 0;
  take: number = 10;
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
        this.dataService.deletePayment(payment).subscribe((res) => {
          if (res.status === 200) {
            //toast
            this.getPayments();
          }
        });
      }
    });
  }

  getPayments() {
    this.dataService
      .getPayments(
        fromFiltersToRequestPayment(this.filters, this.skip, this.take)
      )
      .subscribe((res: Page) => {
        this.payments = res.data;
        this.totalPages = Math.ceil(res.total / this.take);
        console.log('Payments', this.payments, 'totalPages', this.totalPages);
      });
  }

  onPageClick(page: number) {
    this.skip = (page - 1) * this.take;
    this.actualPage = page;
    this.getPayments();
  }
}
