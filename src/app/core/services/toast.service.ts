import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toasts: Toast[] = [];
  private toastsBS = new BehaviorSubject<any>(this.toasts);
  public toasts$ = this.toastsBS.asObservable();

  constructor() { }

  show(header: string, body: string, success: boolean) {
    this.toasts.push({
      header, body, success
    });
    this.toastsBS.next(this.toasts);
    setTimeout(() => {
      this.remove({
        header,
        body,
        success
      })
    }, 6000);
  }

  remove(toast: Toast) {
    console.log('pre', this.toasts);
    this.toasts = this.toasts.filter(t => t === toast);
    console.log('post', this.toasts);

    this.toastsBS.next(this.toasts);
  }
}
