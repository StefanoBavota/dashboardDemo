import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEditPageComponent } from './area-edit-page.component';

describe('AreaEditPageComponent', () => {
  let component: AreaEditPageComponent;
  let fixture: ComponentFixture<AreaEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
