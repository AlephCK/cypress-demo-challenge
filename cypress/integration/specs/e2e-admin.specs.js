import { loginUser, logoutUser, checkLoginPage } from '../actions/login-actions';
import { fillSystemUserFields, checkAddUserForm, checkAdminPage, searchSystemUser, validateUserSearch, deleteUserRow, updateUser } from '../actions/system-users-actions';
import { checkTopbarHeaderText, clickAddButton, clickMainMenuItem, checkToast } from '../actions/general-actions';
import { updateAdminUserEmployee } from '../actions/pim-employee-actions';

context('E2E: Admin Tests', () => {
  before(() => {
    cy.visit(Cypress.env('url'));
    loginUser(Cypress.env('TEST_USER'), Cypress.env('TEST_PASSWORD'));
    checkTopbarHeaderText('Dashboard');
    cy.visit(Cypress.env('url') + '/pim/viewPersonalDetails/empNumber/27');
    updateAdminUserEmployee();
    logoutUser();
    checkLoginPage();
  });

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
    loginUser(Cypress.env('TEST_USER'), Cypress.env('TEST_PASSWORD'));
    checkTopbarHeaderText('Dashboard');
    clickMainMenuItem('Admin');
    checkTopbarHeaderText('Admin');
    checkAdminPage();
  });

  it('Add a system User', () => {
    clickAddButton();
    checkAddUserForm();
    fillSystemUserFields();
    checkToast();
  });

  it('Search a system User', () => {
    searchSystemUser();
    validateUserSearch();
  });

  it('Update a system User', () => {
    searchSystemUser();
    updateUser();
    checkToast('Updated');
  });

  it('Delete a system User', () => {
    searchSystemUser(true);
    validateUserSearch(true);
    deleteUserRow();
    checkToast('Deleted');
  });
});