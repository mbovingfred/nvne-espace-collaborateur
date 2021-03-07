import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneOptionPickerComponent } from './nvne-option-picker.component';

describe('NvneOptionPickerComponent', () => {
  let component: NvneOptionPickerComponent;
  let fixture: ComponentFixture<NvneOptionPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneOptionPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneOptionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
