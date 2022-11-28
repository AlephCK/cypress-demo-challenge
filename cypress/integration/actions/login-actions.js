import { loginElements } from "../elements-data/login-elements";

export function loginUser(username, password) {
 cy.get(loginElements.usernameField.selector)
   .type(username)
   .should('have.value', username);

  cy.get(loginElements.passwordField.selector)
    .type(password)
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