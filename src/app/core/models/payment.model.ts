export interface Payment {
  id: string
  clientId: string
  societyId: string
  total: number
  annualFee: number
  paymentDate: Date
  paymentAreas: PaymentArea[]
}

export interface PaymentArea {
  areaId: string
  total: number
  type: string
}
