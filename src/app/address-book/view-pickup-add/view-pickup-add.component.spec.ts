import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPickupAddComponent } from './view-pickup-add.component';

describe('ViewPickupAddComponent', () => {
  let component: ViewPickupAddComponent;
  let fixture: ComponentFixture<ViewPickupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPickupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPickupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
