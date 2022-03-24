import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyListPageComponent } from './society-list-page.component';

describe('SocietyListPageComponent', () => {
  let component: SocietyListPageComponent;
  let fixture: ComponentFixture<SocietyListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
