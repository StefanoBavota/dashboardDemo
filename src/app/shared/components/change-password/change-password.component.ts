import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoggedUser } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { validatePasswordMatch } from '../../validators/password-match.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  changePassForm: FormGroup;
  loggedInUser: LoggedUser;

  constructor(
    private activeModal: NgbActiveModal,
    public config: NgbModalConfig,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private authService: AuthService

  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.loggedInUser = this.authService.getUser();
    console.log('logged',this.loggedInUser);

    this.changePassForm = this.formBuilder.group(
      {
        oldPassword: [null, [Validators.required, Validators.minLength(8)]],
        newPassword: [null, [Validators.required, Validators.minLength(8)]],
        checkPassword: [null, [Validators.required]],
      },
      { validators: [validatePasswordMatch] }
    );
  }

  ngOnInit(): void {}

  onClose() {
    this.activeModal.close();
  }

  onConfirm() {
    // take data from form
    const body = this.changePassForm.value;
    delete body.checkPassword;

    debugger;

    // api call
    this.dataService.changePassword(body,  this.loggedInUser.id).subscribe(res => {
      console.log('res',res);
    });

    //TODO: subscribe and hanfle the response
    this.activeModal.close();
  }

  get oldPassword() {
    return this.changePassForm.get('oldPassword') as FormControl;
  }

  get newPassword() {
    return this.changePassForm.get('newPassword') as FormControl;
  }

  get checkPassword() {
    return this.changePassForm.get('checkPassword') as FormControl;
  }
}
