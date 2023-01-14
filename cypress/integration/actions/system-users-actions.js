import { systemUserElements } from '../elements-data/system-users-elements';
import { generalElements } from '../elements-data/general-elements';

import { clickSaveButton, clickSearchButton } from './general-actions';

export function fillSystemUserFields(useSecondaryText = false) {

  if (useSecondaryText){
    cy.get(systemUserElements.changePasswordCheck.selector)
      .click();
  }

  cy.get(systemUserElements.addUserFormBody.selector)
    .within(() => {
      Object
        .entries(systemUserElements.systemUserTextFields)
        .forEach(([, value]) => {
          cy.get(value.selector)
            .clear()
            .type(`{selectall}${useSecondaryText ? value.text2 : value.text}`, { delay: 60 });
        });

      if (!useSecondaryText) {
        cy.get(systemUserElements.employeeNameField.selector)
          .clear()
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
      }
    });

  clickSaveButton();
}

export function checkAddUserForm(isEditForm = false) {
  cy.get(systemUserElements.AddSystemUserHeader.selector)
    .should('be.visible')
    .then((header) => {
      if (isEditForm){
        cy.wrap(header)
          .should('contain.text', systemUserElements.AddSystemUserHeader.text2);
      } else {
        cy.wrap(header)
          .should('contain.text', systemUserElements.AddSystemUserHeader.text);
      }
    });
}

export function checkAdminPage() {
  cy.get(systemUserElements.systemUserHeader.selector)
    .should('be.visible')
    .should('contain.text', systemUserElements.systemUserHeader.text);
}

export function searchSystemUser(useSecondaryText = false) {
  cy.get(systemUserElements.systemUserTextFields.usernameField.searchSelector)
    .should('be.visible')
    .type(`{selectall}${useSecondaryText ?
      systemUserElements.systemUserTextFields.usernameField.text2 :
      systemUserElements.systemUserTextFields.usernameField.text}`,
    { delay: 60 }
    ).blur();

  clickSearchButton();
}

export function validateUserSearch(useUpdatedUser = false) {
  cy.get(systemUserElements.userFirstRow.selector)
    .within(() => {
      if (useUpdatedUser) {
        cy.contains(systemUserElements.systemUserTextFields.usernameField.text2)
          .should('be.visible');
      } else {
        cy.contains(systemUserElements.systemUserTextFields.usernameField.text)
          .should('be.visible');
      }
    });
}

export function updateUser() {
  cy.get(systemUserElements.userFirstRow.selector)
    .within(() => {
      cy.get(generalElements.editPencilButton.selector)
        .should('be.visible')
        .click();
    });

  checkAddUserForm(true);
  fillSystemUserFields(true);

  clickSaveButton();
}

export function deleteUserRow() {
  cy.get(systemUserElements.userFirstRow.selector)
    .within(() => {
      cy.get(generalElements.deleteTrashButton.selector)
        .should('be.visible')
        .click({ force: true });
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