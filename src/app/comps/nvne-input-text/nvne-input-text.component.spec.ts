import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneInputTextComponent } from './nvne-input-text.component';

describe('NvneInputTextComponent', () => {
  let component: NvneInputTextComponent;
  let fixture: ComponentFixture<NvneInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
