import { loginUser } from '../actions/login-actions';
import {
  clickMainMenuItem,
  checkTopbarHeaderText,
  clickSaveButton,
  clickAddButton,
  checkToast
} from '../actions/general-actions';
import {
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
    clickAddButton();
    fillEmployeeFullName();
    clickSaveButton();
    checkToast();
    validateEmployeeFields();
    checkPersonalDetails();
  });

  it('Search an employee', () =>{
    searchEmployeeByName('Cyberto');
  });

  it('Update an employee', () => {
    searchEmployeeByName('Cyberto');
    updateEmployee();
    checkToast('Updated');
    validateEmployeeFields(true);
  });

  it('Delete an employee', () =>{
    searchEmployeeByName('Buggerto');
    deleteEmployee();
    checkToast('Deleted');
    searchEmployeeByName('Buggerto', true);
    checkToast('No Records Found');
  });
});