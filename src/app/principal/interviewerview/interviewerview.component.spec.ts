import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerviewComponent } from './interviewerview.component';

describe('InterviewerviewComponent', () => {
  let component: InterviewerviewComponent;
  let fixture: ComponentFixture<InterviewerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
