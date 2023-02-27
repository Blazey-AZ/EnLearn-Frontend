import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldetaileditComponent } from './personaldetailedit.component';

describe('PersonaldetaileditComponent', () => {
  let component: PersonaldetaileditComponent;
  let fixture: ComponentFixture<PersonaldetaileditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaldetaileditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaldetaileditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
