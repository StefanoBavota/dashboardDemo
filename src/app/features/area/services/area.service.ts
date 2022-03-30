import { Injectable } from '@angular/core';
import { Area } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private area?: Area;

  constructor() { }

  setArea(area: Area) {
    this.area = area;
  }

  resetService() {
    this.area = undefined;
  }

  getArea() {
    return this.area;
  }

}
