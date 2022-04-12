export interface Payment {
  id: string;
  clientName: string;
  clientSurname: string;
  total: number;
  annualFee: number;
  paymentDate: Date;
  paymentAreas: PaymentArea[];
}

export interface PaymentArea {
  areaName: string;
  areaId: string;
  total: number;
  type: string;
}

export interface PaymentDTO {
  idClient: string,
  total: number,
  annualFee: number,
  paymentDate: Date,
  idArea: string
}
