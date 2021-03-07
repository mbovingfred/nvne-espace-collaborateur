import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneCheckboxComponent } from './nvne-checkbox.component';

describe('NvneCheckboxComponent', () => {
  let component: NvneCheckboxComponent;
  let fixture: ComponentFixture<NvneCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
