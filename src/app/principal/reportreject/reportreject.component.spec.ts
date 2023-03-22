import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportrejectComponent } from './reportreject.component';

describe('ReportrejectComponent', () => {
  let component: ReportrejectComponent;
  let fixture: ComponentFixture<ReportrejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportrejectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportrejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
