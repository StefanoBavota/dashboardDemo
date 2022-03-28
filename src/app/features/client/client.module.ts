import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { ClientEditPageComponent } from './components/client-edit-page/client-edit-page.component';
import { ClientListPageComponent } from './components/client-list-page/client-list-page.component';
import { FilterRowComponent } from './components/filter-row/filter-row.component';


@NgModule({
  declarations: [
    ClientListPageComponent,
    ClientEditPageComponent,
    FilterRowComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ClientModule { }
