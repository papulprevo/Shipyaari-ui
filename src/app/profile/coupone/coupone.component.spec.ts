import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponeComponent } from './coupone.component';

describe('CouponeComponent', () => {
  let component: CouponeComponent;
  let fixture: ComponentFixture<CouponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
