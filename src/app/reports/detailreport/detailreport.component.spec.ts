import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreportComponent } from './detailreport.component';

describe('DetailreportComponent', () => {
  let component: DetailreportComponent;
  let fixture: ComponentFixture<DetailreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
