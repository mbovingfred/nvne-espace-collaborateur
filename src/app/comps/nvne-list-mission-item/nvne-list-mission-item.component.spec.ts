import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvneListMissionItemComponent } from './nvne-list-mission-item.component';

describe('NvneListMissionItemComponent', () => {
  let component: NvneListMissionItemComponent;
  let fixture: ComponentFixture<NvneListMissionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvneListMissionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvneListMissionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
