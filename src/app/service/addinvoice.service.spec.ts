import { TestBed } from '@angular/core/testing';

import { AddInvoiceService } from './addinvoice.service';

describe('AddinvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddInvoiceService = TestBed.get(AddInvoiceService);
    expect(service).toBeTruthy();
  });
});
