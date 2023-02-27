import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationregComponent } from './applicationreg.component';

describe('ApplicationregComponent', () => {
  let component: ApplicationregComponent;
  let fixture: ComponentFixture<ApplicationregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
