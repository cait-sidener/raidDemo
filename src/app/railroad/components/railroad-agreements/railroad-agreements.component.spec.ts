import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailroadAgreementsComponent } from './railroad-agreements.component';

describe('RailroadAgreementsComponent', () => {
  let component: RailroadAgreementsComponent;
  let fixture: ComponentFixture<RailroadAgreementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailroadAgreementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailroadAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
