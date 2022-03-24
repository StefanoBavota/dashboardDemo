import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [SidebarComponent, NavbarComponent],
})
export class CoreModule {}
