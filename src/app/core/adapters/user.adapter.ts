import { UserFilters } from "src/app/features/admin-user/model/filter.model";
import { UserRequest } from "../models";

export function fromFiltersToRequestUser(filter: UserFilters, limit: number, offset: number, ): UserRequest {
  let req: UserRequest = {
    limit: limit,
    offset: offset,
  };


  if(filter.filterByRole !== 'All' && filter.filterByRole !== '') {
    req.role = filter.filterByRole;
  }

  if(filter.emailSearch !== '') {
    req.search = filter.emailSearch;
  }


  return req;
}
