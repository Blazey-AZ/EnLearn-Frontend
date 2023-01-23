import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictregComponent } from './districtreg.component';

describe('DistrictregComponent', () => {
  let component: DistrictregComponent;
  let fixture: ComponentFixture<DistrictregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
