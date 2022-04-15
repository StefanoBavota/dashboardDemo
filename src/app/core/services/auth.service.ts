import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LoggedUser, LoginRequest, User } from '../models';
import { DataService } from './data.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';
  private user?: LoggedUser;

  constructor(private data: DataService) {
    let localString = window.localStorage.getItem('sports-board');
    if (localString) {
      this.token = localString
      this.decodeAndSave(this.token);
    }
  }

  login(body: LoginRequest): Observable<boolean> {
    return this.data.login(body.email, body.password).pipe(
      tap((res) => {
        if (res.access_token !== '') {
          this.token = res.access_token;
          this.decodeAndSave(this.token);
          if (body.remember) {
            window.localStorage.setItem(
              'sports-board',
              JSON.stringify(res.access_token)
            );
          }
        }
      }),
      switchMap(() => {
        if (this.token !== '') {
          return of(true);
        } else return of(false);
      })
    );
  }

  getToken(): string {
    return this.token;
  }

  setToken(newToken: string): void {
    this.token = newToken;
  }

  decodeAndSave(token: string) {
    this.user = jwt_decode<LoggedUser>(token);
  }

  /*
    GUARD METHODS
  */

  hasToken(): boolean {
    return this.token !== '';
  }

  getUser(): LoggedUser {
    return this.user || {} as LoggedUser;
  }

  isAdmin(): boolean {
    if (this.user) {
      if (this.user.role === 'Admin') {
        return false;
      } else return false;
    } else return false;
  }
}
