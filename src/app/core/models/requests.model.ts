export interface BaseRequest {
  page?: number,
  skip?: number,
  take?: number
}

export interface PaymentRequest extends BaseRequest {
  search?: string,
  active?: boolean
}
