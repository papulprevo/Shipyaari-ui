import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackChart3Component } from './track-chart3.component';

describe('TrackChart3Component', () => {
  let component: TrackChart3Component;
  let fixture: ComponentFixture<TrackChart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackChart3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackChart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
