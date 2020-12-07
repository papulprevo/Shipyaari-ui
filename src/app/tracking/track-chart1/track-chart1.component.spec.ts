import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackChart1Component } from './track-chart1.component';

describe('TrackChart1Component', () => {
  let component: TrackChart1Component;
  let fixture: ComponentFixture<TrackChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackChart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
