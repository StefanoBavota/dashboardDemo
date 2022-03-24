import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditPageComponent } from './components/client-edit-page/client-edit-page.component';
import { ClientListPageComponent } from './components/client-list-page/client-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientListPageComponent
  },
  {
    path: ':id',
    component: ClientEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
