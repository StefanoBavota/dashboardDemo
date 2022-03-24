import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';



@NgModule({
  declarations: [
    TablePaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablePaginationComponent
  ]
})
export class SharedModule { }
