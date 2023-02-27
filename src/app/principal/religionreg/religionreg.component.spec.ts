import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionregComponent } from './religionreg.component';

describe('ReligionregComponent', () => {
  let component: ReligionregComponent;
  let fixture: ComponentFixture<ReligionregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligionregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligionregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
