import { loginUser, checkInvalidCredentials } from "../actions/login-actions";
import { checkDashboardNavButton, checkCompanyLogo, checkTopbarHeaderText } from "../actions/general-actions"

context('E2E: Login Tests', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
  });

  it('Login with valid credentials', () => {
    loginUser(Cypress.env('TEST_USER'), Cypress.env('TEST_PASSWORD'));
    checkTopbarHeaderText('Dashboard');
    checkDashboardNavButton();
    checkCompanyLogo();
  });

  it('Login with invalid credentials', () => {
    loginUser(Cypress.env('TEST_USER'), '1Nv@L1d');
    checkInvalidCredentials();
  });

})