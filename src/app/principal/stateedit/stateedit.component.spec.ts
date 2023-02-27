import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateeditComponent } from './stateedit.component';

describe('StateeditComponent', () => {
  let component: StateeditComponent;
  let fixture: ComponentFixture<StateeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
