import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaListPageComponent } from './components/area-list-page/area-list-page.component';
import { AreaEditPageComponent } from './components/area-edit-page/area-edit-page.component';


@NgModule({
  declarations: [
    AreaListPageComponent,
    AreaEditPageComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule
  ]
})
export class AreaModule { }
