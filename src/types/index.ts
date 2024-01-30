import type { SexType } from '@faker-js/faker'

export type Form = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type Lawer = {
  id: string
  personalInfo: PersonalInfo
  physicalInfo?: PhysicalInfo
  locationInfo?: LocationInfo
  financialInfo?: FinancialInfo
  workInfo?: WorkInfo
}
export type PersonalInfo = {
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: SexType
  email: string
  phone: string
  username: string
  password: string
  birthDate: Date
  image: string
  bloodGroup: string
  university: string
}
export type PhysicalInfo = {
  height: number
  weight: number
  eyeColor: string
  hair: Hair
}
export type Hair = {
  color: string
  type: string
}

export type LocationInfo = {
  domain: string
  ip: string
  address: Address
  macAddress: string
}
export type FinancialInfo = {
  bank: Bank
}

export type Bank = {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export type WorkInfo = {
  company: Company
}

export type Company = {
  address: Address
  department: string
  name: string
  title: string
  sensitiveInfo: SensitiveInfo
}
export type Address = {
  address: string
  city: string
  coordinates: Coordinates
  postalCode: string
  state: string
}
export type Coordinates = {
  lat: number
  lng: number
}
export type SensitiveInfo = {
  ein: string
  ssn: string
}
