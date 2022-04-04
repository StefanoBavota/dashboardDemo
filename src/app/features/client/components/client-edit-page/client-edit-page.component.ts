import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Client } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { ClientService } from '../../services/client.service';
import { getDateInputFormat } from './client-edit-utils';

@Component({
  selector: 'app-client-edit-page',
  templateUrl: './client-edit-page.component.html',
  styleUrls: ['./client-edit-page.component.scss']
})
export class ClientEditPageComponent implements OnInit {

  formGroup: FormGroup;
  client?: Client;

  mode: string = 'DETAIL';
  modeBS = new BehaviorSubject<string>(this.mode);
  mode$ = this.modeBS.asObservable();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private data: DataService,
    private clientService: ClientService
  ) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      cf: ['', Validators.required],
      phone: ['', Validators.required],
      parentName: [''],
      parentSurname: [''],
      parentCf: [''],
      address: ['', Validators.required],
      cap: ['', Validators.required],
      city: ['', Validators.required],
      born: [{}, Validators.required],
      bornPlace: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cardYear: ['', Validators.required],
      isActive: [false, Validators.required],
      payed: [false, Validators.required],
      note: ['']
    });
  }

  ngOnInit(): void {
    this.client = this.clientService.getClient();
    if(!this.client) {
      this.changeMode('NEW');
    } else this.populateFormControls();
  }

  populateFormControls() {
    if(this.client && this.mode !== 'NEW') {
      this.formGroup.patchValue(this.client);
      this.formGroup.patchValue({
        born: getDateInputFormat(this.client.born)
      })
    }
    if(this.mode === 'DETAIL') {
      this.formGroup.disable();
    }
  }

  enableModifies() {
    this.changeMode('EDIT');
    this.formGroup.enable();
  }

  saveModifies() {
    console.log('formGroup', this.formGroup.value);
    if(this.formGroup.valid) {
      if(this.mode === 'EDIT' && this.client) {
        const newClient: Client = {
          id: this.client?.id,
          ...this.formGroup.value
        };
        this.data.modifyClient(newClient).subscribe(res => {
          console.log(res);
          this.router.navigateByUrl('client')
        });
      }
      else {
        this.data.insertClient({
          id: '',
          ...this.formGroup.value
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

  onClickBack() {
    this.clientService.resetService();
    this.router.navigateByUrl('/client');
  }

}
