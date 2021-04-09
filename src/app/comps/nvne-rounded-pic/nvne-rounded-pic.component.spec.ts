import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneRoundedPicComponent } from './nvne-rounded-pic.component';

describe('NvneRoundedPicComponent', () => {
  let component: NvneRoundedPicComponent;
  let fixture: ComponentFixture<NvneRoundedPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneRoundedPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneRoundedPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
