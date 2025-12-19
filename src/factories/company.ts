import { faker } from '@faker-js/faker'

export const createCompany = () => {
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
    website: faker.internet.url(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    billingAddress: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      country: faker.location.country(),
    },
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
}
