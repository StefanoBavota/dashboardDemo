import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Area, AreaRequest } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-area-list-page',
  templateUrl: './area-list-page.component.html',
  styleUrls: ['./area-list-page.component.scss']
})
export class AreaListPageComponent implements OnInit {

  search: string = '';
  searchControl = new FormControl('');

  areas: Area[] = [];

  skip: number = 0;
  take: number = 10;
  totalPages: number = 1;
  actualPage: number = 1;

  constructor(
    private data: DataService,
    private router: Router,
    private areaService: AreaService
  ) { }

  ngOnInit(): void {
    this.getAreas();
    this.searchControl.valueChanges.subscribe(res => {
      this.search = res;
      this.getAreas();
    })
  }

  getAreas() {
    this.data.getAreas(this.generateAreaRequest()).subscribe(res => {
      this.areas = res.data;
      this.totalPages = Math.ceil(res.total / this.take);
      console.log('totalPages', this.totalPages);
    })
  }

  onPageClick(page: number) {
    this.skip = (page-1) * this.take;
    this.actualPage = page;
    this.getAreas();
  }

  onPageSizeChange(size: number) {
    this.take = size;
    this.getAreas();
  }

  onClickEdit(area: Area) {
    this.areaService.setArea(area);
    this.router.navigateByUrl('client/edit/' + area.id)
  }

  generateAreaRequest(): AreaRequest {
    let request: AreaRequest = {
      skip: this.skip,
      take: this.take
    };
    if(this.search !== '') request.search = this.search;
    return request;
  }
}
