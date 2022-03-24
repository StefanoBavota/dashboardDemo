import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageSizeSelectionComponent } from './components/page-size-selection/page-size-selection.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';



@NgModule({
  declarations: [
    TablePaginationComponent,
    PageSizeSelectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablePaginationComponent,
    PageSizeSelectionComponent
  ]
})
export class SharedModule { }
