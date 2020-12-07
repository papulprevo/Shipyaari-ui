import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempViewPickAddressComponent } from './temp-view-pick-address.component';

describe('TempViewPickAddressComponent', () => {
  let component: TempViewPickAddressComponent;
  let fixture: ComponentFixture<TempViewPickAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempViewPickAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempViewPickAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
