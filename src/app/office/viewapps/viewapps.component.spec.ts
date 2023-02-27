import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappsComponent } from './viewapps.component';

describe('ViewappsComponent', () => {
  let component: ViewappsComponent;
  let fixture: ComponentFixture<ViewappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewappsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
