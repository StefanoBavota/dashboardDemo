import { UserFilters } from "src/app/features/admin-user/model/filter.model";
import { UserRequest } from "../models";

export function fromFiltersToRequestUser(filter: UserFilters, skip: number, take: number): UserRequest {
  let req: UserRequest = {
    skip: skip,
    take: take
  };


  if(filter.filterByRole !== 'ALL') {
    req.role = filter.filterByRole;
  }

  if(filter.emailSearch !== '') {
    req.search = filter.emailSearch;
  }


  return req;
}
