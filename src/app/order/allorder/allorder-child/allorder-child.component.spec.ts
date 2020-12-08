import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllorderChildComponent } from './allorder-child.component';

describe('AllorderChildComponent', () => {
  let component: AllorderChildComponent;
  let fixture: ComponentFixture<AllorderChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllorderChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllorderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
