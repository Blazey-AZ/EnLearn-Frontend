import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationviewsingularComponent } from './applicationviewsingular.component';

describe('ApplicationviewsingularComponent', () => {
  let component: ApplicationviewsingularComponent;
  let fixture: ComponentFixture<ApplicationviewsingularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationviewsingularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationviewsingularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
