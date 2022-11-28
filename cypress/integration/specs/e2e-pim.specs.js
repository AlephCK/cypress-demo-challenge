import { loginUser } from "../actions/login-actions";
import { clickMainMenuItem, checkTopbarHeaderText, waitOnRequest } from "../actions/general-actions"
import { clickAddEmployeeButton, fillEmployeeFullName, clickSaveButton, validateEmployeeFields, checkPersonalDetails } from "../actions/pim-actions"

context('E2E: Login Tests', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
    loginUser(Cypress.env('TEST_USER'), Cypress.env('TEST_PASSWORD'));
    checkTopbarHeaderText('Dashboard');
  });

  it('Add a new employee', () => {
    clickMainMenuItem('PIM');
    checkTopbarHeaderText('PIM');
    clickAddEmployeeButton();
    fillEmployeeFullName();
    clickSaveButton();
    validateEmployeeFields();
    checkPersonalDetails();
  });
})