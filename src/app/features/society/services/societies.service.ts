import { Injectable } from '@angular/core';
import { Society } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class SocietiesService {

  private society?: Society;

  constructor() { }

  setSociety(society: Society) {
    this.society = society;
  }

  resetService() {
    this.society = undefined;
  }

  getSociety() {
    return this.society;
  }
}
