import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneInputFileComponent } from './nvne-input-file.component';

describe('NvneInputFileComponent', () => {
  let component: NvneInputFileComponent;
  let fixture: ComponentFixture<NvneInputFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneInputFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneInputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
