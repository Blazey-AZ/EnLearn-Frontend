import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsviewComponent } from './applicationsview.component';

describe('ApplicationsviewComponent', () => {
  let component: ApplicationsviewComponent;
  let fixture: ComponentFixture<ApplicationsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
