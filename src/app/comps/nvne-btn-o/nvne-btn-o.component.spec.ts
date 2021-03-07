import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneBtnOComponent } from './nvne-btn-o.component';

describe('NvneBtnOComponent', () => {
  let component: NvneBtnOComponent;
  let fixture: ComponentFixture<NvneBtnOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneBtnOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneBtnOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
