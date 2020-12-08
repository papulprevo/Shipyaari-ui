import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadytopickComponent } from './readytopick.component';

describe('ReadytopickComponent', () => {
  let component: ReadytopickComponent;
  let fixture: ComponentFixture<ReadytopickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadytopickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadytopickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
