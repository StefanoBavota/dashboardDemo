import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from '../core/services/toast.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

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
