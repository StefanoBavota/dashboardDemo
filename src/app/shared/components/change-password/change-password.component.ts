import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(private activeModal: NgbActiveModal, config: NgbModalConfig) {}

  ngOnInit(): void {}

  onClose() {
    this.activeModal.close();
  }

  onConfirm() {
    this.activeModal.close();
  }
}
