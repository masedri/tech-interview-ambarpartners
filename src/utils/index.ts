import { faker } from '@faker-js/faker'

import type {
  FinancialInfo,
  LocationInfo,
  PersonalInfo,
  PhysicalInfo,
  Lawer,
  WorkInfo,
} from '@/types'

const getPersonalInfo = (): PersonalInfo => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    maidenName: faker.person.lastName(),
    age: faker.helpers.rangeToNumber({ min: 20, max: 60 }),
    gender: faker.person.sexType(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    birthDate: faker.date.birthdate(),
    image: faker.image.urlLoremFlickr({ category: 'cats' }),
    bloodGroup: faker.helpers.arrayElement([
      'A+',
      'B+',
      'AB+',
      'O+',
      'A-',
      'B-',
      'AB-',
      'O-',
    ]),
    university: faker.company.name(),
  }
}
const getPhysicalInfo = (): PhysicalInfo => {
  return {
    height: faker.helpers.rangeToNumber({ min: 150, max: 200 }),
    weight: faker.helpers.rangeToNumber({ min: 20, max: 100 }),
    eyeColor: faker.helpers.arrayElement(['Green', 'Blue', 'Brown']),
    hair: {
      color: faker.helpers.arrayElement(['Black', 'Brown', 'Blonde']),
      type: 'Strands',
    },
  }
}
const getLocationInfo = (): LocationInfo => {
  return {
    domain: faker.internet.domainName(),
    ip: faker.internet.ip(),
    address: {
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      coordinates: {
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
      },
      postalCode: faker.location.zipCode(),
      state: faker.location.state(),
    },
    macAddress: faker.internet.mac(),
  }
}

const getFinancialInfo = (): FinancialInfo => {
  return {
    bank: {
      cardExpire: faker.date
        .future({ years: 3 })
        .toLocaleDateString()
        .split('/')
        .join('-'),
      cardNumber: faker.finance.creditCardNumber(),
      cardType: faker.helpers.arrayElement(['visa', 'mastercard']),
      currency: faker.finance.currencyCode(),
      iban: faker.finance.iban(),
    },
  }
}
const getWorkInfo = (): WorkInfo => {
  return {
    company: {
      address: {
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        coordinates: {
          lat: faker.location.latitude(),
          lng: faker.location.longitude(),
        },
        postalCode: faker.location.zipCode(),
        state: faker.location.state(),
      },
      department: faker.commerce.department(),
      name: faker.company.name(),
      title: faker.person.jobTitle(),
      sensitiveInfo: {
        ein: `${faker.helpers.rangeToNumber({ min: 10, max: 99 })}-${faker.helpers.rangeToNumber({ min: 1000000, max: 9999999 })}`,
        ssn: `${faker.helpers.rangeToNumber({ min: 100, max: 999 })}-${faker.helpers.rangeToNumber({ min: 10, max: 99 })}-${faker.helpers.rangeToNumber({ min: 1000, max: 9999 })}`,
      },
    },
  }
}

function createRandomLawer(): Lawer {
  return {
    id: faker.string.uuid(),
    personalInfo: getPersonalInfo(),
    physicalInfo: getPhysicalInfo(),
    locationInfo: getLocationInfo(),
    financialInfo: getFinancialInfo(),
    workInfo: getWorkInfo(),
  }
}

export const generateRamdonLawers = (lawers: number) =>
  Array.from({ length: lawers }, () => createRandomLawer())
