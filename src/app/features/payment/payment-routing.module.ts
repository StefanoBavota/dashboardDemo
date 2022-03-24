import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentEditPageComponent } from './components/payment-edit-page/payment-edit-page.component';
import { PaymentListPageComponent } from './components/payment-list-page/payment-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentListPageComponent
  },
  {
    path: ':id',
    component: PaymentEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
