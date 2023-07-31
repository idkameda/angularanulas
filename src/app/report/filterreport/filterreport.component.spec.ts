/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilterreportComponent } from './filterreport.component';

describe('FilterreportComponent', () => {
  let component: FilterreportComponent;
  let fixture: ComponentFixture<FilterreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
