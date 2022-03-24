import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ChangePasswordModalComponent } from './components/change-password-modal/change-password-modal.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    ChangePasswordModalComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
