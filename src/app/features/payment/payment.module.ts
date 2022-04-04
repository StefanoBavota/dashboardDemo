import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentListPageComponent } from './components/payment-list-page/payment-list-page.component';
import { PaymentEditPageComponent } from './components/payment-edit-page/payment-edit-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentListPageComponent,
    PaymentEditPageComponent,
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class PaymentModule { }
