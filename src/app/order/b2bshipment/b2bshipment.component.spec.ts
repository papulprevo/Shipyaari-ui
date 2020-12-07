import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bshipmentComponent } from './b2bshipment.component';

describe('B2bshipmentComponent', () => {
  let component: B2bshipmentComponent;
  let fixture: ComponentFixture<B2bshipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2bshipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bshipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
