import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationstatusviewComponent } from './applicationstatusview.component';

describe('ApplicationstatusviewComponent', () => {
  let component: ApplicationstatusviewComponent;
  let fixture: ComponentFixture<ApplicationstatusviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationstatusviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationstatusviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
