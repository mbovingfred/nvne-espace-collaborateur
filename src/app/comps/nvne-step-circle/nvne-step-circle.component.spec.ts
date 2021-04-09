import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneStepCircleComponent } from './nvne-step-circle.component';

describe('NvneStepCircleComponent', () => {
  let component: NvneStepCircleComponent;
  let fixture: ComponentFixture<NvneStepCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneStepCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneStepCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
