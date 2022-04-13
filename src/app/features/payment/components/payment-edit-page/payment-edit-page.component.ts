import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, of, OperatorFunction, switchMap, tap } from 'rxjs';
import { Area, Client } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-payment-edit-page',
  templateUrl: './payment-edit-page.component.html',
  styleUrls: ['./payment-edit-page.component.scss'],
})
export class PaymentEditPageComponent implements OnInit {
  paymentForm: FormGroup;


  formatterClient = (client: Client) => `${client.id} - ${client.name} ${client.surname}`
  ;
  searchClient: OperatorFunction<string, Client[]> = (text$: Observable<string>) => text$.pipe(
    tap(text => console.log('sto in client', text)),
    debounceTime(200),
    distinctUntilChanged(),
    switchMap(text => this.dataService.getClients({search: text})),
    switchMap(res => (of(res.data)))
  )

  formatterArea = (area: Area) => `${area.id} - ${area.name}`
  searchArea: OperatorFunction<string, Area[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap(text => this.dataService.getAreas({search: text})),
    switchMap(res => (of(res.data)))
  )

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
  }

  onSave() {
    const body = this.paymentForm.value;
    console.log('form: ', body);
    this.dataService.insertPayment({
      client: this.paymentForm.get('client')?.value.id,
      area: this.paymentForm.get('area')?.value.id,
      total: this.paymentForm.get('price')?.value,
      annualFee: this.paymentForm.get('annualPrice')?.value,
      paymentDate: this.paymentForm.get('date')?.value
    }).subscribe(res => {
      console.log('save payment', res);
      this.router.navigateByUrl('section/payment');
    })
  }
}
