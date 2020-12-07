import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelAddComponent } from './add-del-add.component';

describe('AddDelAddComponent', () => {
  let component: AddDelAddComponent;
  let fixture: ComponentFixture<AddDelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDelAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
