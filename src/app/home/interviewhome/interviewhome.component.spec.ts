import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewhomeComponent } from './interviewhome.component';

describe('InterviewhomeComponent', () => {
  let component: InterviewhomeComponent;
  let fixture: ComponentFixture<InterviewhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
