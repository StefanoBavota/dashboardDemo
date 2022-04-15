import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Area, AreaRequest } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-area-list-page',
  templateUrl: './area-list-page.component.html',
  styleUrls: ['./area-list-page.component.scss'],
})
export class AreaListPageComponent implements OnInit {
  search: string = '';
  searchControl = new FormControl('');

  areas: Area[] = [];

  offset: number = 0;
  limit: number = 10;
  totalPages: number = 1;
  actualPage: number = 1;

  constructor(
    private data: DataService,
    private router: Router,
    private areaService: AreaService,
    private modalService: NgbModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getAreas();
    this.searchControl.valueChanges.subscribe((res) => {
      this.search = res;
      this.getAreas();
    });
  }

  getAreas() {
    this.data.getAreas(this.generateAreaRequest()).subscribe((res) => {
      this.areas = res.data;
      this.totalPages = Math.ceil(res.total / this.limit);
      console.log('totalPages', this.totalPages);
    });
  }

  onPageClick(page: number) {
    this.offset = (page - 1) * this.limit;
    this.actualPage = page;
    this.getAreas();
  }

  onPageSizeChange(size: number) {
    this.limit = size;
    this.getAreas();
  }

  onClickEdit(area: Area) {
    this.areaService.setArea(area);
    this.router.navigateByUrl('area/edit/' + area.id);
  }

  generateAreaRequest(): AreaRequest {
    let request: AreaRequest = {
      offset: this.offset,
      limit: this.limit,
    };
    if (this.search !== '') request.search = this.search;
    return request;
  }

  onClickDelete(area: Area) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.item = `${area.id}-${area.name}`;

    modalRef.result.then((modalRes) => {
      if (modalRes) {
        console.log('aaaa');
        this.toastService.show(
          'Settore rimosso',
          `Il settore ${area.name} è stato rimosso`,
          true
        );
        this.data.deleteArea(area).subscribe((res) => {
          this.getAreas();
        });
      }
    });
  }
  onClickNewArea() {
    this.areaService.resetService();
    this.router.navigateByUrl('area/new');
  }
}
