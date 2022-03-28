import { ClientFilters } from "src/app/features/client/model/filter.model";
import { ClientRequest } from "../models";

export function fromFiltersToRequestClient(filter: ClientFilters, skip: number, take: number): ClientRequest {
  let req: ClientRequest = {
    skip: skip,
    take: take
  };
  if(filter.active !== '-') {
    req.active = filter.active === 'SI';
  }
  if(filter.bornYear !== 0) {
    req.bornDate = filter.bornYear;
  }
  if(filter.cardYear !== 0) {
    req.cardYear = filter.cardYear;
  }
  if(filter.search !== '') {
    req.search = filter.search;
  }
  return req;
}
