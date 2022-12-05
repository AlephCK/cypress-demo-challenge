import { faker } from '@faker-js/faker';

const employeeData = {
  middleName: faker.name.middleName(),
  lastName: faker.name.lastName()
};

export const employeeInfo = {
  employeeData
};