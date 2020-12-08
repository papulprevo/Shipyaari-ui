import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteorderComponent } from './completeorder.component';

describe('CompleteorderComponent', () => {
  let component: CompleteorderComponent;
  let fixture: ComponentFixture<CompleteorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
