import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackChart4Component } from './track-chart4.component';

describe('TrackChart4Component', () => {
  let component: TrackChart4Component;
  let fixture: ComponentFixture<TrackChart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackChart4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackChart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
