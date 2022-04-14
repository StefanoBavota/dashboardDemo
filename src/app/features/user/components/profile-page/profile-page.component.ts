import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/core/services/data.service';
import { ChangePasswordComponent } from 'src/app/shared/components/change-password/change-password.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  isEnable: boolean = false;

  profileForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      firstName: ['Mario', [Validators.required]],
      lastName: ['Rossi', [Validators.required]],
    });

    this.profileForm.disable();
  }

  ngOnInit(): void {}

  onEnableModifies() {
    this.profileForm.enable();
    this.isEnable = true;
  }

  onSaveModifies() {
    this.profileForm.disable();
    this.isEnable = false;

    const body = this.profileForm.value;
    this.dataService.modifyProfile(body).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('profile');
    });
  }

  openModalPassword() {
    this.modalService.open(ChangePasswordComponent);
  }
}
