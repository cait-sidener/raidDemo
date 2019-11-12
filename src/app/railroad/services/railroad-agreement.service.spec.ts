import { TestBed } from '@angular/core/testing';

import { RailroadAgreementService } from './railroad-agreement.service';

describe('RailroadAgreementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RailroadAgreementService = TestBed.get(RailroadAgreementService);
    expect(service).toBeTruthy();
  });
});
