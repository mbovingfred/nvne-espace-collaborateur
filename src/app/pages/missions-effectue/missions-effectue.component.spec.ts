import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsEffectueComponent } from './missions-effectue.component';

describe('MissionsEffectueComponent', () => {
  let component: MissionsEffectueComponent;
  let fixture: ComponentFixture<MissionsEffectueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionsEffectueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsEffectueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
