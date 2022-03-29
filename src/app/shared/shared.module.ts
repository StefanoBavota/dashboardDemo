import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageSizeSelectionComponent } from './components/page-size-selection/page-size-selection.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { FormItemComponent } from './components/form-item/form-item.component';

@NgModule({
  declarations: [
    TablePaginationComponent,
    PageSizeSelectionComponent,
    FormItemComponent,
  ],
  imports: [CommonModule],
  exports: [
    TablePaginationComponent,
    PageSizeSelectionComponent,
    FormItemComponent
  ],
})
export class SharedModule {}
