import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageSizeSelectionComponent } from './components/page-size-selection/page-size-selection.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    TablePaginationComponent,
    PageSizeSelectionComponent,
    FormItemComponent,
    ConfirmModalComponent,
    DeleteModalComponent,
  ],
  imports: [CommonModule],
  exports: [
    TablePaginationComponent,
    PageSizeSelectionComponent,
    FormItemComponent,
    ConfirmModalComponent,
  ],
})
export class SharedModule {}
