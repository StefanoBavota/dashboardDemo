import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaListPageComponent } from './area-list-page.component';

describe('AreaListPageComponent', () => {
  let component: AreaListPageComponent;
  let fixture: ComponentFixture<AreaListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
