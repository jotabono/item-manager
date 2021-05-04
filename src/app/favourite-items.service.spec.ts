import { TestBed } from '@angular/core/testing';

import { FavouriteItemsService } from './favourite-items.service';

describe('FavouriteItemsService', () => {
  let service: FavouriteItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
