import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionviewComponent } from './religionview.component';

describe('ReligionviewComponent', () => {
  let component: ReligionviewComponent;
  let fixture: ComponentFixture<ReligionviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligionviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
