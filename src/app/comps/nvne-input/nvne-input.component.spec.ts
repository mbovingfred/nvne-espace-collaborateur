import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneInputComponent } from './nvne-input.component';

describe('NvneInputComponent', () => {
  let component: NvneInputComponent;
  let fixture: ComponentFixture<NvneInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
