import { loginElements } from '../elements-data/login-elements';

export function loginUser(username, password) {
  cy.get(loginElements.usernameField.selector)
    .type(username)
    .should('have.value', username);

  cy.get(loginElements.passwordField.selector)
    .type(password, {log: false})
    .should('have.value', password);

  cy.get(loginElements.loginButton.selector)
    .should('contain.text', loginElements.loginButton.text)
    .click();
}

export function checkInvalidCredentials() {
  cy.get(loginElements.loginAlert.selector)
    .should('contain.text', loginElements.loginAlert.text)
    .should('be.visible');

  cy.get(loginElements.usernameField.selector)
    .should('have.value', '');

  cy.get(loginElements.passwordField.selector)
    .should('have.value', '');
}

export function logoutUser(){
  cy.get(loginElements.userDropdown.selector)
    .click();

  cy.intercept({
    method: 'GET',
    url: '**/auth/login'
  }).as('call');

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.get(loginElements.logoutMenuItem.selector)
    .should('be.visible')
    .should('contain.text', loginElements.logoutMenuItem.text)
    .click();

  cy.wait('@call').then(({response}) => {
    expect(response.statusCode).to.eq(200);
  });
}

export function checkLoginPage() {
  cy.get(loginElements.loginLogo.selector)
    .should('be.visible');

  cy.get(loginElements.loginTitle.selector)
    .should('be.visible')
    .should('contain.text', loginElements.loginTitle.text);
}