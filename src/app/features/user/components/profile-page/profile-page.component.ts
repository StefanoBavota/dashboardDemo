import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoggedUser, User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';
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
  loggedInUser: LoggedUser;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private authService: AuthService
  ) {
    this.loggedInUser = this.authService.getUser();
    console.log(this.loggedInUser)

    this.profileForm = this.formBuilder.group({
      firstName: [this.loggedInUser.name, [Validators.required]],
      lastName: [this.loggedInUser.surname, [Validators.required]],
    });

    this.profileForm.disable();
  }

  ngOnInit(): void {
    
  }

  onEnableModifies() {
    this.profileForm.enable();
    this.isEnable = true;
  }

  onSaveModifies() {
    this.profileForm.disable();
    this.isEnable = false;

    const body = this.profileForm.value;
    this.dataService.modifyProfile(body, this.loggedInUser.id).subscribe((res) => {
      console.log(res)
      //TODO: ricevere una nuova jwt e sovrascrivere la vecchia
    });
  }

  openModalPassword() {
    this.modalService.open(ChangePasswordComponent);
  }
}
