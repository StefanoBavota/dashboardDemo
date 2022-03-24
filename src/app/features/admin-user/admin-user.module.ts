import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUserRoutingModule } from './admin-user-routing.module';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';
import { UserEditPageComponent } from './components/user-edit-page/user-edit-page.component';


@NgModule({
  declarations: [
    UserListPageComponent,
    UserEditPageComponent
  ],
  imports: [
    CommonModule,
    AdminUserRoutingModule
  ]
})
export class AdminUserModule { }
