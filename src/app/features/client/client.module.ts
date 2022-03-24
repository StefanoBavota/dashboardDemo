import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListPageComponent } from './components/client-list-page/client-list-page.component';
import { ClientEditPageComponent } from './components/client-edit-page/client-edit-page.component';


@NgModule({
  declarations: [
    ClientListPageComponent,
    ClientEditPageComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
