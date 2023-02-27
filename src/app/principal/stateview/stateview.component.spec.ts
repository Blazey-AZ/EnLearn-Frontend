import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateviewComponent } from './stateview.component';

describe('StateviewComponent', () => {
  let component: StateviewComponent;
  let fixture: ComponentFixture<StateviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
