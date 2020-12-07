import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempBulkUploadPickAddressComponent } from './temp-bulk-upload-pick-address.component';

describe('TempBulkUploadPickAddressComponent', () => {
  let component: TempBulkUploadPickAddressComponent;
  let fixture: ComponentFixture<TempBulkUploadPickAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempBulkUploadPickAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempBulkUploadPickAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
