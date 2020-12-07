import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleschannelComponent } from './moduleschannel.component';

describe('ModuleschannelComponent', () => {
  let component: ModuleschannelComponent;
  let fixture: ComponentFixture<ModuleschannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleschannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleschannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
