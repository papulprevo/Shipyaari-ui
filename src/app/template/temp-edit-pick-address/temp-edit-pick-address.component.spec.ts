import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempEditPickAddressComponent } from './temp-edit-pick-address.component';

describe('TempEditPickAddressComponent', () => {
  let component: TempEditPickAddressComponent;
  let fixture: ComponentFixture<TempEditPickAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempEditPickAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempEditPickAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
