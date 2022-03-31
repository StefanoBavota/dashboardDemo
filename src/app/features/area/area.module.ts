import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AreaRoutingModule } from './area-routing.module';
import { AreaEditPageComponent } from './components/area-edit-page/area-edit-page.component';
import { AreaListPageComponent } from './components/area-list-page/area-list-page.component';



@NgModule({
  declarations: [
    AreaListPageComponent,
    AreaEditPageComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AreaModule { }
