import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  populateFormControls() {
    if(this.user && this.mode !== 'NEW') {
      this.editFormUser.patchValue(this.user);
      this.editFormUser.patchValue({
        born: getDateInputFormat(this.client.born)
      })
    }
    if(this.mode === 'DETAIL') {
      this.editFormUser.disable();
    }
  }

  enableModifies() {
    this.changeMode('EDIT');
    this.editFormUser.enable();
  }

  saveModifies() {
    console.log('formGroup', this.editFormUser.value);
    if(this.editFormUser.valid) {
      if(this.mode === 'EDIT' && this.client) {
        const newClient: Client = {
          id: this.client?.id,
          ...this.editFormUser.value
        };
        this.data.modifyClient(newClient).subscribe(res => {
          console.log(res);
          this.router.navigateByUrl('client')
        });
      }
      else {
        this.data.insertClient({
          id: '',
          ...this.editFormUser.value
        }).subscribe(res => {
          this.router.navigateByUrl('client');
        });
      }
    }
  }

  changeMode(newMode: string) {
    this.mode = newMode;
    this.modeBS.next(newMode);
  }
  checkField(input: NgModel) {
    return { 'is-invalid': input.invalid, 'is-valid': input.valid}
  }

  submitHandler(formData: any) {
    console.log(formData)

  }
}
