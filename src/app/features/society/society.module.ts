import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocietyRoutingModule } from './society-routing.module';
import { SocietyListPageComponent } from './components/society-list-page/society-list-page.component';
import { SocietyEditPageComponent } from './components/society-edit-page/society-edit-page.component';


@NgModule({
  declarations: [
    SocietyListPageComponent,
    SocietyEditPageComponent
  ],
  imports: [
    CommonModule,
    SocietyRoutingModule
  ]
})
export class SocietyModule { }
