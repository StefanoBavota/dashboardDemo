import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [SidebarComponent, NavbarComponent],
})
export class CoreModule {}
