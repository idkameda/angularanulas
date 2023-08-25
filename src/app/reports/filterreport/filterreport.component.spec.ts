import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterreportComponent } from './filterreport.component';

describe('FilterreportComponent', () => {
  let component: FilterreportComponent;
  let fixture: ComponentFixture<FilterreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
