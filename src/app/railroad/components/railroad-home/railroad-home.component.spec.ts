import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailroadHomeComponent } from './railroad-home.component';

describe('RailroadHomeComponent', () => {
  let component: RailroadHomeComponent;
  let fixture: ComponentFixture<RailroadHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailroadHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailroadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
