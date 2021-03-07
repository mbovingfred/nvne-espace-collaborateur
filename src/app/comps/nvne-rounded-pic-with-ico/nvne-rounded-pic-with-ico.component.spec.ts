import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneRoundedPicWithIcoComponent } from './nvne-rounded-pic-with-ico.component';

describe('NvneRoundedPicWithIcoComponent', () => {
  let component: NvneRoundedPicWithIcoComponent;
  let fixture: ComponentFixture<NvneRoundedPicWithIcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneRoundedPicWithIcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneRoundedPicWithIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
