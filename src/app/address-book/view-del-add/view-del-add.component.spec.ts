import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDelAddComponent } from './view-del-add.component';

describe('ViewDelAddComponent', () => {
  let component: ViewDelAddComponent;
  let fixture: ComponentFixture<ViewDelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDelAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
