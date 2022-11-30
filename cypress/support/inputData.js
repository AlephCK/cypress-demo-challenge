import { faker } from '@faker-js/faker';

const employeeData = {
  firstName: faker.name.firstName(),
  middleName: faker.name.middleName(),
  lastName: faker.name.lastName()
}

export const employeeInfo = {
  employeeData
};