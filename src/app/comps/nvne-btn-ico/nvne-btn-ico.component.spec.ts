import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneBtnIcoComponent } from './nvne-btn-ico.component';

describe('NvneBtnIcoComponent', () => {
  let component: NvneBtnIcoComponent;
  let fixture: ComponentFixture<NvneBtnIcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneBtnIcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneBtnIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
