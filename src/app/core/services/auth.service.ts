import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = '';
  private admin: boolean = false;


  constructor(
    private data: DataService
  ) {
    let local = window.localStorage.getItem('sports-board');
    if(local) this.token = local;
  }

  login(email: string, password: string, remember: boolean): Observable<boolean> {
    return this.data.login(email, password).pipe(
      tap((res) => {
        if(res.hasOwnProperty('token') && res.token) {
          this.token = res.token;
          this.admin = res.admin || false;
          if(remember) {
            window.localStorage.setItem('sports-board', this.token);
          }
        }
      }),
      switchMap(() => {
        if(this.token !== '') {
          return of(true);
        } else return of(false);
      })
    )
  }

  getToken() {
    return this.token;
  }

  /*
    GUARD METHODS
  */

  hasToken() {
    return this.token !== '';
  }

  isAdmin() {
    return this.admin;
  }

}
