import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSquadComponent } from './design-squad.component';

describe('DesignSquadComponent', () => {
  let component: DesignSquadComponent;
  let fixture: ComponentFixture<DesignSquadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSquadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
