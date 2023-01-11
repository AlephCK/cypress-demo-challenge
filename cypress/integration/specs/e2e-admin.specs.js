import { loginUser, logoutUser } from '../actions/login-actions';
import { checkTopbarHeaderText } from '../actions/general-actions';
import {
  clickAddEmployeeButton,
  fillEmployeeFullName,
  validateEmployeeFields,
  checkPersonalDetails
} from '../actions/pim-employee-actions';

context('E2E: Admin Tests', () => {

  before(() => {
    cy.visit(Cypress.env('url'));
    loginUser(Cypress.env('TEST_USER'), Cypress.env('TEST_PASSWORD'));
    cy.visit(Cypress.env('url') + 'web/index.php/pim/viewEmployeeList');
    clickAddEmployeeButton();
    fillEmployeeFullName();
    validateEmployeeFields();
    checkPersonalDetails();
    logoutUser();
  });

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
    loginUser(Cypress.env('TEST_USER'), Cypress.env('TEST_PASSWORD'));
    cy.visit(Cypress.env('url') + 'web/index.php/admin/viewSystemUsers');
    checkTopbarHeaderText('AdminUser Management');
  });

  it('Add a new user', () => {

  });

});