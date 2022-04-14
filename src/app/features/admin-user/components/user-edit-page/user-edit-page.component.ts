import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { NewUser, User } from './../../../../core/models/user.model';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss'],
})
export class UserEditPageComponent implements OnInit {
  editFormUser: FormGroup = new FormGroup({})
  user?: User;
  user2?: NewUser;
  visible: boolean = false;
  readOnly: boolean = false;

  errorBS = new BehaviorSubject<boolean>(false);
  error$ = this.errorBS.asObservable();

  mode: string = 'DETAIL';
  modeBS = new BehaviorSubject<string>(this.mode);
  mode$ = this.modeBS.asObservable();

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private data: DataService,
    private UserService: UserService
  ) {
  }

  checkPasswords(): ValidatorFn {
    return (group: AbstractControl) : ValidationErrors | null => {
      const pass = (<FormGroup>group).controls['password']?.value;
      const confirmPass = (<FormGroup>group).controls['confirmPassword']?.value;
      console.log('www', pass, confirmPass)
      return pass === confirmPass ? null : { notSame: true };
    }
  }

  ngOnInit(): void {
    this.user = this.UserService.getUser();
    console.log('user', this.user)
    if(!this.user) {
      this.changeMode('NEW');
      this.visible = true;
    }
    this.createFormGroup();
    if(this.mode === 'NEW') {
      this.editFormUser.addValidators([this.checkPasswords()])
    }
    else this.populateFormControls();
  }

  createFormGroup() {
    console.log('pre', this.editFormUser)
    this.editFormUser = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['', Validators.required],
      }
    );
    console.log('pre 2', this.editFormUser)

    if(this.mode === 'NEW') {
      this.editFormUser.addControl('password', new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]));
      this.editFormUser.addControl('confirmPassword', new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]));

      console.log('edit', this.editFormUser);

    }
  }

  populateFormControls() {
      if(this.user && this.mode !== 'NEW') {
        console.log('form', this.editFormUser.value)
        this.editFormUser.patchValue(this.user);
        // this.formGroup.patchValue({
        //   born: getDateInputFormat(this.client.born)
        // })
      }
      if(this.mode === 'DETAIL') {
        this.editFormUser.disable();
        this.visible = false;
        this.readOnly = true;
      }
    }


  enableModifies() {
    this.changeMode('EDIT');
    this.editFormUser.enable();
    this.visible = false;
    this.readOnly = true;
  }

  saveModifies() {
    delete this.editFormUser.value.confirmPassword;
    if(this.editFormUser.valid) {
      console.log(this.mode)
      if(this.mode === 'EDIT' && this.user) {
        const newUser: NewUser = {
          id: this.user?.id,
          ...this.editFormUser.value
        };
        this.data.modifyUser(newUser).subscribe(res => {
          this.router.navigateByUrl('section/user')
        });
      }
      else {
        this.data.insertUser({
          // id: '',
          ...this.editFormUser.value
        }).subscribe(res => {
          this.router.navigateByUrl('section/user');
        });
      }
    }
  }



  changeMode(newMode: string) {
    this.mode = newMode;
    this.modeBS.next(newMode);
  }

  checkField(input: NgModel) {
    return { 'is-invalid': input.invalid, 'is-valid': input.valid };
  }

  submitHandler(formData: any) {
    console.log(formData);
  }

  goBack() {
    this.UserService.resetService();
    this.router.navigateByUrl('/section/user');
  }
}
