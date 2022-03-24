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

    let localString = window.localStorage.getItem('sports-board');
    if(localString) {
      this.token = JSON.parse(localString).token;
      this.admin = JSON.parse(localString).admin;
    }
  }

  login(email: string, password: string, remember: boolean): Observable<boolean> {
    return this.data.login(email, password).pipe(
      tap((res) => {
        if(res.token !== '') {
          this.token = res.token;
          this.admin = res.admin || false;
          if(remember) {
            window.localStorage.setItem('sports-board', JSON.stringify(
              {
                token: res.token,
                admin: res.admin
              }
            ));
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
