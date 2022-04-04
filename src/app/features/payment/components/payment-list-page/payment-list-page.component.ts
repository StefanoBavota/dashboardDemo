import { Component, OnInit } from '@angular/core';
import { fromFiltersToRequestPayment } from 'src/app/core/adapters/payment.adapter';
import { Page, Payment } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { PaymentFilters } from 'src/app/features/client/model/filter.model';

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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPayments();
  }

  onClickEdit(payment: Payment) {}

  onClickDelete(payment: Payment) {}

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
