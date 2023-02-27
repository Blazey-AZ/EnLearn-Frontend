import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplicationssingularComponent } from './viewapplicationssingular.component';

describe('ViewapplicationssingularComponent', () => {
  let component: ViewapplicationssingularComponent;
  let fixture: ComponentFixture<ViewapplicationssingularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewapplicationssingularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewapplicationssingularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
