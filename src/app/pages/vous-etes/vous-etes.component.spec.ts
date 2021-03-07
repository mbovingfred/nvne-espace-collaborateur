import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VousEtesComponent } from './vous-etes.component';

describe('VousEtesComponent', () => {
  let component: VousEtesComponent;
  let fixture: ComponentFixture<VousEtesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VousEtesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VousEtesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
