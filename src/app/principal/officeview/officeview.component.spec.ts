import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeviewComponent } from './officeview.component';

describe('OfficeviewComponent', () => {
  let component: OfficeviewComponent;
  let fixture: ComponentFixture<OfficeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
