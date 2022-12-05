import { loginUser } from '../actions/login-actions';
import { clickMainMenuItem, checkTopbarHeaderText } from '../actions/general-actions';
import {
  clickAddEmployeeButton,
  fillEmployeeFullName,
  clickSaveButton,
  deleteEmployee,
  validateEmployeeFields,
  checkPersonalDetails,
  searchEmployeeByName,
  updateEmployee
} from '../actions/pim-actions';

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
    searchEmployeeByName('James');
  });

  it('Update an employee', () => {
    searchEmployeeByName('James');
    updateEmployee();
    validateEmployeeFields(true);
  });

  it('Delete an employee', () =>{
    searchEmployeeByName('John');
    deleteEmployee();
    searchEmployeeByName('John', true);
  });
});