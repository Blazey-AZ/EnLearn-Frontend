import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligioneditComponent } from './religionedit.component';

describe('ReligioneditComponent', () => {
  let component: ReligioneditComponent;
  let fixture: ComponentFixture<ReligioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
