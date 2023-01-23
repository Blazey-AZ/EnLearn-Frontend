import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseregComponent } from './coursereg.component';

describe('CourseregComponent', () => {
  let component: CourseregComponent;
  let fixture: ComponentFixture<CourseregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
