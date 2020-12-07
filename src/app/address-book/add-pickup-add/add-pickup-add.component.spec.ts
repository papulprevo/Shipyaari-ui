import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPickupAddComponent } from './add-pickup-add.component';

describe('AddPickupAddComponent', () => {
  let component: AddPickupAddComponent;
  let fixture: ComponentFixture<AddPickupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPickupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPickupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
