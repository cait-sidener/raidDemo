import { TestBed } from '@angular/core/testing';

import { AgreementInfoService } from './agreement-info.service';

describe('AgreementInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgreementInfoService = TestBed.get(AgreementInfoService);
    expect(service).toBeTruthy();
  });
});
