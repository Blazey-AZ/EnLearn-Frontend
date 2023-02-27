import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappssingularComponent } from './viewappssingular.component';

describe('ViewappssingularComponent', () => {
  let component: ViewappssingularComponent;
  let fixture: ComponentFixture<ViewappssingularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewappssingularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewappssingularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
