import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackChart2Component } from './track-chart2.component';

describe('TrackChart2Component', () => {
  let component: TrackChart2Component;
  let fixture: ComponentFixture<TrackChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackChart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
