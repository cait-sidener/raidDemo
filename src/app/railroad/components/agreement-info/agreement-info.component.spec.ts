import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementInfoComponent } from './agreement-info.component';

describe('AgreementInfoComponent', () => {
  let component: AgreementInfoComponent;
  let fixture: ComponentFixture<AgreementInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
