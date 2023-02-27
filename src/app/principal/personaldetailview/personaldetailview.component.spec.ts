import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldetailviewComponent } from './personaldetailview.component';

describe('PersonaldetailviewComponent', () => {
  let component: PersonaldetailviewComponent;
  let fixture: ComponentFixture<PersonaldetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaldetailviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaldetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
