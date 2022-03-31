import { UserService } from './../../services/user.service';
import { User } from './../../../../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss'],
})
export class UserEditPageComponent implements OnInit {


  editFormUser: FormGroup;
  user?: User;

  mode: string = 'DETAIL';
  modeBS = new BehaviorSubject<string>(this.mode);
  mode$ = this.modeBS.asObservable();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private data: DataService,
    private UserService: UserService
  ) {
    this.editFormUser = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      ruolo: ['', Validators.required],
      namepassword: ['', Validators.required],
      confirmaPassword: ['', Validators.required]
    });
  }



  ngOnInit(): void {
    this.user = this.UserService.getUser();
    if (!this.user) {
      this.changeMode('NEW');
    } else this.populateFormControls();
  }

  populateFormControls() {
    if (this.user && this.mode !== 'NEW') {
      this.editFormUser.patchValue(this.user);

    }
    if (this.mode === 'DETAIL') {
      this.editFormUser.disable();
    }
  }

  enableModifies() {
    this.changeMode('EDIT');
    this.editFormUser.enable();
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
          this.router.navigateByUrl('user')
        });
      }
      else {
        this.data.insertUser({
          id: '',
          ...this.editFormUser.value
        }).subscribe(res => {
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
    return { 'is-invalid': input.invalid, 'is-valid': input.valid }
  }

  submitHandler(formData: any) {
    console.log(formData)

  }


  goBack() {
    this.router.navigateByUrl('user');
  }
}
