import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplicationsComponent } from './viewapplications.component';

describe('ViewapplicationsComponent', () => {
  let component: ViewapplicationsComponent;
  let fixture: ComponentFixture<ViewapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
