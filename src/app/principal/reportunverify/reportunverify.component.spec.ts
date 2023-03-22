import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportunverifyComponent } from './reportunverify.component';

describe('ReportunverifyComponent', () => {
  let component: ReportunverifyComponent;
  let fixture: ComponentFixture<ReportunverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportunverifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportunverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
