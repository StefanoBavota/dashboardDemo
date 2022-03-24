import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEditPageComponent } from './payment-edit-page.component';

describe('PaymentEditPageComponent', () => {
  let component: PaymentEditPageComponent;
  let fixture: ComponentFixture<PaymentEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
