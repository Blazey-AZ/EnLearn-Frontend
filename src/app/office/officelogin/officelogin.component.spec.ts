import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeloginComponent } from './officelogin.component';

describe('OfficeloginComponent', () => {
  let component: OfficeloginComponent;
  let fixture: ComponentFixture<OfficeloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
