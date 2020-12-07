import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPickupAddComponent } from './edit-pickup-add.component';

describe('EditPickupAddComponent', () => {
  let component: EditPickupAddComponent;
  let fixture: ComponentFixture<EditPickupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPickupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPickupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
