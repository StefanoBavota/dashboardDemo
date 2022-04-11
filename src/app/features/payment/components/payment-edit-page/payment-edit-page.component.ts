import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Area, Client } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-payment-edit-page',
  templateUrl: './payment-edit-page.component.html',
  styleUrls: ['./payment-edit-page.component.scss'],
})
export class PaymentEditPageComponent implements OnInit {
  paymentForm: FormGroup;

  allClients: Client[] = [];
  allAreas: Area[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.paymentForm = this.fb.group({
      client: [null, Validators.required],
      area: [null, Validators.required],
      price: [null, Validators.required],
      annualPrice: [null, Validators.required],
      date: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllClients();
    this.getAllAreas();
  }

  getAllClients() {
    this.dataService.getClients({}).subscribe((res) => {
      this.allClients = res.data;
    });
  }

  getAllAreas() {
    this.dataService.getAreas({}).subscribe((res) => {
      this.allAreas = res.data;
    });
  }

  onSave() {
    const body = this.paymentForm.value;
    console.log('form: ', body);
    //this.router.navigate(['/section/payment'])
  }
}
