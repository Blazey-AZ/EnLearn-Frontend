import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportfailComponent } from './reportfail.component';

describe('ReportfailComponent', () => {
  let component: ReportfailComponent;
  let fixture: ComponentFixture<ReportfailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportfailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
