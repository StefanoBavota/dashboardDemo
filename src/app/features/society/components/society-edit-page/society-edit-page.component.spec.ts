import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyEditPageComponent } from './society-edit-page.component';

describe('SocietyEditPageComponent', () => {
  let component: SocietyEditPageComponent;
  let fixture: ComponentFixture<SocietyEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
