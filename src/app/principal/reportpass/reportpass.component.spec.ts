import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportpassComponent } from './reportpass.component';

describe('ReportpassComponent', () => {
  let component: ReportpassComponent;
  let fixture: ComponentFixture<ReportpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
