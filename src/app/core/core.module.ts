import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [SidebarComponent],
})
export class CoreModule {}
