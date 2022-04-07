import { SocietiesService } from './../../services/societies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Society } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-society-list-page',
  templateUrl: './society-list-page.component.html',
  styleUrls: ['./society-list-page.component.scss']
})
export class SocietyListPageComponent implements OnInit {

  societies: Society[] = [];

  offset: number = 0;
  limit: number = 10;
  totalPages: number = 1;
  actualPage: number = 1;

  success: boolean = true;


  constructor( private data: DataService,
    private societyService: SocietiesService,
    private router: Router,
    private modalService: NgbModal,
    private toastService: ToastService) { }

  ngOnInit(): void {
    this.getSocieties();
  }



  getSocieties() {
    this.data.getSocieties(this.generateSocietyRequest()).subscribe(res => {
      if(!res){
        this.success = false;
      }
      this.societies = res.data;
      console.log('society',this.societies);
      this.totalPages = Math.ceil(res.total / this.limit);
      console.log('totalPages', this.totalPages);
    })
  }


  generateSocietyRequest(){
    let request = {
      offset: this.offset,
      limit: this.limit
    };
    return request;
  }

  onClickNewSociety(){
    this.societyService.resetService();
    this.router.navigateByUrl('society/new');
  }


  onClickEdit(society: Society){
    this.societyService.setSociety(society);
    this.router.navigateByUrl('society/edit/' + society.id)
  }



  onClickDelete(society: Society){
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.item = `${society.id} - ${society.ragioneSociale} - ${society.cf}`;

    modalRef.result.then(modalRes => {
      if(modalRes) {
        console.log('aaaa');
        this.toastService.show('Società rimossa', `La società ${society.id} è stato rimossa`, true);
        this.data.deleteSociety(society).subscribe((res) => {
          if(res.status === 200) {

          }
        });
      }
    })

  }

  onPageClick(page: number) {
    this.offset = (page-1) * this.limit;
    this.actualPage = page;
    this.getSocieties();
  }

  onPageSizeChange(size: number) {
    this.limit = size;
    this.getSocieties();
  }


}
