import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from './core/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboardDemo';
  isSideOpen: boolean = false;
  toasts$: Observable<any>;

  constructor(
    private toastService: ToastService
  ) {
    this.toasts$ = this.toastService.toasts$;
    this.toasts$.subscribe();
  }

  toggleSidebar(e: boolean) {
    this.isSideOpen = e;
  }

  closeToast(toast: any) {
    this.toastService.remove(toast);
  }
}
