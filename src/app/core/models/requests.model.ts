export interface BaseRequest {
  page?: number,
  elementsNum?: number
}

export interface PaymentRequest extends BaseRequest {
  search?: string,
  active?: boolean
}
