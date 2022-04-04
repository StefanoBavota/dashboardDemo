export interface ClientFilters {
  search: string,
  bornYear: number,
  cardYear: number,
  active: string
}

export interface PaymentFilters {
  search: string,
  area: string,
  client: string,
  date: string
}
