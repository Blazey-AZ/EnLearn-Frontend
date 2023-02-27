import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentregComponent } from './parentreg.component';

describe('ParentregComponent', () => {
  let component: ParentregComponent;
  let fixture: ComponentFixture<ParentregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
