import { faker } from '@faker-js/faker';

export const employeeData = {
  firstName: faker.name.firstName(),
  middleName: faker.name.middleName(),
  lastName: faker.name.lastName()
};