import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelSettingComponent } from './label-setting.component';

describe('LabelSettingComponent', () => {
  let component: LabelSettingComponent;
  let fixture: ComponentFixture<LabelSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
