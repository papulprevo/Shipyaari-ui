import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadytoshipComponent } from './readytoship.component';

describe('ReadytoshipComponent', () => {
  let component: ReadytoshipComponent;
  let fixture: ComponentFixture<ReadytoshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadytoshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadytoshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
