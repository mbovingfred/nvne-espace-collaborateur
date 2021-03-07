import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneRoundedPicWithStatusComponent } from './nvne-rounded-pic-with-status.component';

describe('NvneRoundedPicWithStatusComponent', () => {
  let component: NvneRoundedPicWithStatusComponent;
  let fixture: ComponentFixture<NvneRoundedPicWithStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneRoundedPicWithStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneRoundedPicWithStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
