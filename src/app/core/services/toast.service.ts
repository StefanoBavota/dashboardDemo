import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toasts: any[] = [];
  private toastsBS = new BehaviorSubject<any>(this.toasts);
  public toasts$ = this.toastsBS.asObservable();

  constructor() { }

  show(header: string, body: string) {
    this.toasts.push({
      header, body
    });
    this.toastsBS.next(this.toasts);
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t != toast);
    this.toastsBS.next(this.toasts);
  }
}
