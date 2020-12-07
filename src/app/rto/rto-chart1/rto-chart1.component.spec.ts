import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoChart1Component } from './rto-chart1.component';

describe('RtoChart1Component', () => {
  let component: RtoChart1Component;
  let fixture: ComponentFixture<RtoChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtoChart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtoChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
