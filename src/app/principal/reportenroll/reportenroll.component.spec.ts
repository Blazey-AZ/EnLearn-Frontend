import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportenrollComponent } from './reportenroll.component';

describe('ReportenrollComponent', () => {
  let component: ReportenrollComponent;
  let fixture: ComponentFixture<ReportenrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportenrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportenrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
