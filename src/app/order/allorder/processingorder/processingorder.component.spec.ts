import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingorderComponent } from './processingorder.component';

describe('ProcessingorderComponent', () => {
  let component: ProcessingorderComponent;
  let fixture: ComponentFixture<ProcessingorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
