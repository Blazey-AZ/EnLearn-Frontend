import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalloginComponent } from './principallogin.component';

describe('PrincipalloginComponent', () => {
  let component: PrincipalloginComponent;
  let fixture: ComponentFixture<PrincipalloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
