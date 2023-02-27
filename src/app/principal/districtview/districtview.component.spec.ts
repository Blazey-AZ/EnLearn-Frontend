import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictviewComponent } from './districtview.component';

describe('DistrictviewComponent', () => {
  let component: DistrictviewComponent;
  let fixture: ComponentFixture<DistrictviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
