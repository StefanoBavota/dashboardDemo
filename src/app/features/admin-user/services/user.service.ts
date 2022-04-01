import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private user?: User;

  constructor() { }

  setUser(user: User) {
    this.user = user;
  }


  getUser() {
    return this.user;
  }

  resetService() {
    this.user = undefined;
  }


}
