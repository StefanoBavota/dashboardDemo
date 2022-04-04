import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { PageSizeSelectionComponent } from './components/page-size-selection/page-size-selection.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { JoinPipe } from './pipes/join.pipe';

@NgModule({
  declarations: [
    TablePaginationComponent,
    PageSizeSelectionComponent,
    FormItemComponent,
    ConfirmModalComponent,
    ChangePasswordComponent,
    DeleteModalComponent,
    JoinPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    TablePaginationComponent,
    PageSizeSelectionComponent,
    FormItemComponent,
    ConfirmModalComponent,
    ChangePasswordComponent,
    JoinPipe,
  ],
})
export class SharedModule {}
