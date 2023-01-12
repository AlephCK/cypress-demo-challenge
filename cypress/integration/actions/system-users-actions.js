import { systemUserElements } from '../elements-data/system-users-elements';
import { clickSaveButton, clickSearchButton } from './general-actions';
import { generalElements } from '../elements-data/general-elements';

export function fillSystemUserFields() {
  cy.get(systemUserElements.addUserFormBody.selector)
    .within(() => {
      Object
        .entries(systemUserElements.systemUserTextFields)
        .forEach(([, value]) => {
          cy.get(value.selector)
            .clear()
            .type(`{selectall}${value.text}`, { delay: 60 });
        });

      cy.get(systemUserElements.employeeNameField.selector)
        .type(systemUserElements.employeeNameField.firstOptionText.slice(0, -9), {delay: 100});
      cy.contains(systemUserElements.employeeNameField.firstOptionText)
        .click();

      cy.get(systemUserElements.statusDropdownField.selector)
        .click();
      cy.contains(systemUserElements.statusDropdownField.firstOptionSelectText)
        .click();

      cy.get(systemUserElements.userRoleDropdownField.selector)
        .click();
      cy.contains(systemUserElements.userRoleDropdownField.firstOptionSelectText)
        .click();
    });

  clickSaveButton();
}

export function checkAddUserForm() {
  cy.get(systemUserElements.AddSystemUserHeader.selector)
    .should('be.visible')
    .should('contain.text', systemUserElements.AddSystemUserHeader.text);
}

export function checkAdminPage() {
  cy.get(systemUserElements.systemUserHeader.selector)
    .should('be.visible')
    .should('contain.text', systemUserElements.systemUserHeader.text);
}

export function searchSystemUser() {
  cy.get(systemUserElements.systemUserTextFields.usernameField.searchSelector)
    .should('be.visible')
    .type(systemUserElements.systemUserTextFields.usernameField.text);

  clickSearchButton();
}

export function validateUserSearch() {
  cy.get(systemUserElements.userFirstRow.selector)
    .within(() => {
      cy.contains(systemUserElements.systemUserTextFields.usernameField.text)
        .should('be.visible');
    });
}

export function deleteUserRow() {
  cy.get(systemUserElements.userFirstRow.selector)
    .within(() => {
      cy.get(systemUserElements.deleteUser.selector)
        .should('be.visible')
        .click();
    });

  cy.get(generalElements.modalElements.modalBody.selectorBody)
    .should('be.visible')
    .each($modal => {
      cy.wrap($modal)
        .within(() => {
          cy.contains(generalElements.modalElements.modalTitle.text)
            .should('be.visible');

          cy.get(generalElements.modalElements.modalBody.selectorText)
            .should('contain.text', generalElements.modalElements.modalBody.text );
        });
    });

  cy.get(generalElements.modalElements.modalDeleteButton.selector)
    .should('contain.text', generalElements.modalElements.modalDeleteButton.text)
    .click();
}