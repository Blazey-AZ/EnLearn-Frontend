import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeregComponent } from './officereg.component';

describe('OfficeregComponent', () => {
  let component: OfficeregComponent;
  let fixture: ComponentFixture<OfficeregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
