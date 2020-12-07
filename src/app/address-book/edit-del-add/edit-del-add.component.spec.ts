import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelAddComponent } from './edit-del-add.component';

describe('EditDelAddComponent', () => {
  let component: EditDelAddComponent;
  let fixture: ComponentFixture<EditDelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDelAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
