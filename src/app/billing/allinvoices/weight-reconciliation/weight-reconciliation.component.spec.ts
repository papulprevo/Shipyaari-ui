import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightReconciliationComponent } from './weight-reconciliation.component';

describe('WeightReconciliationComponent', () => {
  let component: WeightReconciliationComponent;
  let fixture: ComponentFixture<WeightReconciliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightReconciliationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
