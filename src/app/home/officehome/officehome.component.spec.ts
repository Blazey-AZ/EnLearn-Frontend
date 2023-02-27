import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficehomeComponent } from './officehome.component';

describe('OfficehomeComponent', () => {
  let component: OfficehomeComponent;
  let fixture: ComponentFixture<OfficehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficehomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
