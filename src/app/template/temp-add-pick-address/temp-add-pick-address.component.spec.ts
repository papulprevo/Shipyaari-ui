import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempAddPickAddressComponent } from './temp-add-pick-address.component';

describe('TempAddPickAddressComponent', () => {
  let component: TempAddPickAddressComponent;
  let fixture: ComponentFixture<TempAddPickAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempAddPickAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempAddPickAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
