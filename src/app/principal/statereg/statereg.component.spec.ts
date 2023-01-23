import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateregComponent } from './statereg.component';

describe('StateregComponent', () => {
  let component: StateregComponent;
  let fixture: ComponentFixture<StateregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
