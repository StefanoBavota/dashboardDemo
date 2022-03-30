import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageSizeSelectionComponent } from './components/page-size-selection/page-size-selection.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TablePaginationComponent,
    PageSizeSelectionComponent,
    FormItemComponent,
    ConfirmModalComponent,
    ChangePasswordComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    TablePaginationComponent,
    PageSizeSelectionComponent,
    FormItemComponent,
    ConfirmModalComponent,
    ChangePasswordComponent,
  ],
})
export class SharedModule {}
