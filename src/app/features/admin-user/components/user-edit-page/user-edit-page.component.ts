import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
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


  editFormUser: FormGroup;
  user?: User;
  visible: boolean = false;
  readOnly : boolean = false;

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
    this.editFormUser = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ruolo: ['All', Validators.required],
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    },
      { validator: this.checkPasswords }

    );
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls['password']?.value;
    const confirmPass = group.controls['confirmPassword']?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  ngOnInit(): void {
    this.editFormUser.statusChanges.subscribe(status => {
      console.log(status);
      this.errorBS.next(status === 'INVALID')
    })

    this.user = this.UserService.getUser();
    if (!this.user) {
      this.changeMode('NEW');
      this.visible = true;
      this.readOnly = false;
    } else this.populateFormControls();
  }

  populateFormControls() {
    if (this.user && this.mode !== 'NEW') {
      this.editFormUser.patchValue(this.user);

    }
    if (this.mode === 'DETAIL') {
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
    console.log('formGroup', this.editFormUser.value);
    if (this.editFormUser.valid) {
      if (this.mode === 'EDIT' && this.user) {
        const newUser: User = {
          id: this.user?.id,
          ...this.editFormUser.value
        };
        this.data.modifyUser(newUser).subscribe(res => {
          console.log(res);
          this.router.navigateByUrl('user');
        });
      }
      else {
        this.data.insertUser(<NewUser>this.editFormUser.value).subscribe(res => {
          this.router.navigateByUrl('user');
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
