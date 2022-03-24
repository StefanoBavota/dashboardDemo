import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboardDemo';
  isSideOpen: boolean = false;

  toggleSidebar(e: boolean) {
    this.isSideOpen = e;
  }
}
