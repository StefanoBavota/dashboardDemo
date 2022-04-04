export interface ClientDTO {
  email: string,
  name: string,
  surname: string,
  parentName?: string,
  parentSurname?: string,
  address: string,
  cap: number,
  city: string,
  born: Date,
  bornPlace: string,
  cf: string,
  parentCf?: string,
  phone: string,
  cardNumber: string,
  cardYear: number,
  isActive: boolean,
  payed: boolean,
  note?: string,
}

export interface Client extends ClientDTO {
  id: string,
  createdAt: Date,
  updatedAt: Date,
}


