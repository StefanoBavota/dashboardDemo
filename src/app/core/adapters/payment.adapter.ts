import { PaymentFilters } from 'src/app/features/client/model/filter.model';
import { PaymentRequest } from '../models';

export function fromFiltersToRequestPayment(
  filter: PaymentFilters,
  limit: number,
   offset: number,
) {
  let req: PaymentRequest = {
    limit: limit,
    offset: offset,

  };
  if (filter.client !== '') {
    req.client = filter.client;
  }
  if (filter.area !== '') {
    req.area = filter.area;
  }
  if (filter.date !== '') {
    req.date = filter.date;
  }
  if (filter.search !== '') {
    req.search = filter.search;
  }
  return req;
}
