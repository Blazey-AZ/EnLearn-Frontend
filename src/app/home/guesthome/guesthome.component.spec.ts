import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesthomeComponent } from './guesthome.component';

describe('GuesthomeComponent', () => {
  let component: GuesthomeComponent;
  let fixture: ComponentFixture<GuesthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuesthomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuesthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
