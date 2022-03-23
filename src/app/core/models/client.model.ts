export interface Client {
  id: string
  email: string
  name: string
  surname: string
  parentName: string
  parentSurname: string
  address: string
  cap: number
  city: string
  born: Date
  bornPlace: string
  cf: string
  parentCf: string
  phone: string
  cardNumber: string
  cardYear: number
  active: boolean
  payed: boolean
  creationDate: Date
  note: string
}
