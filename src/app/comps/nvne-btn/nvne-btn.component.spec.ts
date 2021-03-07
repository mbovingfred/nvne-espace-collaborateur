import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneBtnComponent } from './nvne-btn.component';

describe('NvneBtnComponent', () => {
  let component: NvneBtnComponent;
  let fixture: ComponentFixture<NvneBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
