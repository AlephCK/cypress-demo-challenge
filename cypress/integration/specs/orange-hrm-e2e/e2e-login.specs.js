import { checkDashboardNavButton, checkCompanyLogo, checkTopbarHeaderText } from '../../actions/general-actions';
import {
  loginUser,
  checkInvalidCredentials,
  logoutUser,
  checkLoginPage
} from '../../actions/login-actions';

context('E2E: Login Tests', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
    checkLoginPage();
  });

  it('Login with valid credentials', () => {
    loginUser(Cypress.env('user').testUser, Cypress.env('user').testPassword);
    checkTopbarHeaderText('Dashboard');
    checkDashboardNavButton();
    checkCompanyLogo();
  });

  it('Login with invalid credentials', () => {
    loginUser(Cypress.env('user').testUser, '1Nv@L1d');
    checkInvalidCredentials();
  });

  it('Logout', () => {
    loginUser(Cypress.env('user').testUser, Cypress.env('user').testPassword);
    checkTopbarHeaderText('Dashboard');
    logoutUser();
    checkLoginPage();
  });
});