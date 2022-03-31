import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUserRoutingModule } from './admin-user-routing.module';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';
import { UserEditPageComponent } from './components/user-edit-page/user-edit-page.component';
import { FilterRowComponent } from './components/filter-row/filter-row.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListPageComponent,
    UserEditPageComponent,
    FilterRowComponent
  ],
  imports: [
    CommonModule,
    AdminUserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminUserModule { }
