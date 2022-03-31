import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable } from 'rxjs';
import { ChangePasswordComponent } from 'src/app/shared/components/change-password/change-password.component';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  options = [
    { name: 'option1', value: 1 },
    { name: 'option2', value: 2 },
    { name: 'option3', value: 3 },
  ];
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  // MODAL LOGIC OBSERVABLE
  openModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    from(modalRef.result).subscribe((res: boolean) => {
      console.log(res);
    });
  }

  openModalPassword() {
    this.modalService.open(ChangePasswordComponent);
  }
}
