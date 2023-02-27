import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasteviewComponent } from './casteview.component';

describe('CasteviewComponent', () => {
  let component: CasteviewComponent;
  let fixture: ComponentFixture<CasteviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasteviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasteviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
