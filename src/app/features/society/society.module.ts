import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocietyRoutingModule } from './society-routing.module';
import { SocietyListPageComponent } from './components/society-list-page/society-list-page.component';
import { SocietyEditPageComponent } from './components/society-edit-page/society-edit-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SocietyListPageComponent,
    SocietyEditPageComponent
  ],
  imports: [
    CommonModule,
    SocietyRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class SocietyModule { }
