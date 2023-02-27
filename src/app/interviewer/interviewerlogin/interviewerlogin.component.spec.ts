import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerloginComponent } from './interviewerlogin.component';

describe('InterviewerloginComponent', () => {
  let component: InterviewerloginComponent;
  let fixture: ComponentFixture<InterviewerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
