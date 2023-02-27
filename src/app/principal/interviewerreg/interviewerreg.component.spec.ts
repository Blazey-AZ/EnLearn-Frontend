import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerregComponent } from './interviewerreg.component';

describe('InterviewerregComponent', () => {
  let component: InterviewerregComponent;
  let fixture: ComponentFixture<InterviewerregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
