import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSizeSelectionComponent } from './page-size-selection.component';

describe('PageSizeSelectionComponent', () => {
  let component: PageSizeSelectionComponent;
  let fixture: ComponentFixture<PageSizeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSizeSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSizeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
