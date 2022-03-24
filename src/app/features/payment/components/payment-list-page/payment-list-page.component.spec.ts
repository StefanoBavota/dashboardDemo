import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentListPageComponent } from './payment-list-page.component';

describe('PaymentListPageComponent', () => {
  let component: PaymentListPageComponent;
  let fixture: ComponentFixture<PaymentListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
