export interface MonthEarningsResponse {
  data: MonthEarningsResponsePeriod[]
}

export interface MonthEarningsResponsePeriod {
  month: string,
  total: number
}

export interface AreaEarningRequest {
  month: number,
  year: number
}

export interface AreaEarningResponse {
  month: number,
  year: number,
  data: AreaEarning[]
}

export interface AreaEarning {
  area: string,
  total: number
}

export interface TotalClients {
  total: number,
  lastMonth: number
}

export interface LastYearEarning {
  total: number
}
