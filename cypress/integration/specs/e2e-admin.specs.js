import { loginUser } from '../actions/login-actions';
import { fillSystemUserFields, checkAddUserForm, checkAdminPage, searchSystemUser, validateUserSearch, deleteUserRow } from '../actions/system-users-actions';
import { checkTopbarHeaderText, clickAddButton, clickMainMenuItem, checkToast } from '../actions/general-actions';

context('E2E: Admin Tests', () => {
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

  it('Delete a system User', () => {
    searchSystemUser();
    validateUserSearch();
    deleteUserRow();
    checkToast('Deleted');
  });
});