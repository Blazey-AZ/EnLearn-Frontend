import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportverifyComponent } from './reportverify.component';

describe('ReportverifyComponent', () => {
  let component: ReportverifyComponent;
  let fixture: ComponentFixture<ReportverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportverifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
