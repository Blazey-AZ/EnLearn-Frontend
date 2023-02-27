import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasteregComponent } from './castereg.component';

describe('CasteregComponent', () => {
  let component: CasteregComponent;
  let fixture: ComponentFixture<CasteregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasteregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasteregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
