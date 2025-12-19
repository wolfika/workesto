import { faker } from '@faker-js/faker'

export const createEmployee = () => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    dateOfBirth: faker.date.past(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      country: faker.location.country(),
    },
    role: faker.person.jobTitle(),
    department: faker.commerce.department(),
    salary: faker.number.int({ min: 40000, max: 150000 }),
    hireDate: faker.date.past(),
    leaveDate: Math.random() > 0.9 ? faker.date.future() : null,
    companyId: faker.string.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
}
