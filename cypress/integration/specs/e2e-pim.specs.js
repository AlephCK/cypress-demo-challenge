import { loginUser } from '../actions/login-actions';
import { clickMainMenuItem, checkTopbarHeaderText, clickSaveButton } from '../actions/general-actions';
import {
  clickAddEmployeeButton,
  fillEmployeeFullName,
  deleteEmployee,
  validateEmployeeFields,
  checkPersonalDetails,
  searchEmployeeByName,
  updateEmployee
} from '../actions/pim-employee-actions';

context('E2E: PIM Tests', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
    loginUser(Cypress.env('TEST_USER'), Cypress.env('TEST_PASSWORD'));
    checkTopbarHeaderText('Dashboard');
    clickMainMenuItem('PIM');
    checkTopbarHeaderText('PIM');
  });

  it('Add a new employee', () => {
    clickAddEmployeeButton();
    fillEmployeeFullName();
    clickSaveButton();
    validateEmployeeFields();
    checkPersonalDetails();
  });

  it('Search an employee', () =>{
    searchEmployeeByName('Cyberto');
  });

  it('Update an employee', () => {
    searchEmployeeByName('Cyberto');
    updateEmployee();
    validateEmployeeFields(true);
  });

  it('Delete an employee', () =>{
    searchEmployeeByName('Buggerto');
    deleteEmployee();
    searchEmployeeByName('Buggerto', true);
  });
});