import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterPaymentComponent } from './components/filter-payment/filter-payment.component';
import { PaymentEditPageComponent } from './components/payment-edit-page/payment-edit-page.component';
import { PaymentListPageComponent } from './components/payment-list-page/payment-list-page.component';
import { PaymentRoutingModule } from './payment-routing.module';



@NgModule({
  declarations: [
    PaymentListPageComponent,
    PaymentEditPageComponent,
    FilterPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class PaymentModule { }
