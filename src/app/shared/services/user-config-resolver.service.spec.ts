/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserConfigResolverService } from './user-config-resolver.service';

describe('UserConfigResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserConfigResolverService]
    });
  });

  it('should ...', inject([UserConfigResolverService], (service: UserConfigResolverService) => {
    expect(service).toBeTruthy();
  }));
});
