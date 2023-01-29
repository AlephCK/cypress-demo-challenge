import { pimEmployeeElements } from '../elements-data/pim-employees-elements';

import { clickSaveButton, clickSearchButton } from './general-actions';
import { generalElements } from '../elements-data/general-elements';

export function fillEmployeeFullName(useSecondaryText = false) {
  Object
    .entries(pimEmployeeElements.addEmployeeFormElements.employeeFullNameTextFields)
    .forEach(([, value]) => {
      cy.get(value.selector)
        .clear()
        .type(`{selectall}${useSecondaryText ? value.text2 : value.text}`, { delay: 60 });
    });

  clickSaveButton();
}

export function validateEmployeeFields(secondaryText = false) {
  cy.get(pimEmployeeElements.addEmployeeFormElements.employeeFullNameTextFields.employeeFirstName.selector)
    .should('have.value', secondaryText ? pimEmployeeElements.addEmployeeFormElements.employeeFullNameTextFields.employeeFirstName.text2 : pimEmployeeElements.addEmployeeFormElements.employeeFullNameTextFields.employeeFirstName.text);
}

export function checkPersonalDetails() {
  cy.get(pimEmployeeElements.employeePersonalDetailsElements.employeeImage.selector)
    .should('be.visible');

  cy.get(pimEmployeeElements.employeePersonalDetailsElements.employeePersonalDetailHeader.selector)
    .should('be.visible')
    .should('contain.text', pimEmployeeElements.employeePersonalDetailsElements.employeePersonalDetailHeader.text);
}

export function searchEmployeeByName(firstName, isDeleted = false) {
  cy.get(pimEmployeeElements.searchEmployeeFormElements.employeeNameSearchField.selector)
    .should('be.visible')
    .clear()
    .type(firstName)
    .blur();

  cy.intercept({
    method: 'GET',
    url: '**/pim/employees?nameOrId='+firstName+'&includeEmployees=onlyCurrent'
  }).as('call');

  clickSearchButton();

  cy.wait('@call').then(({response}) => {
    expect(response.statusCode).to.eq(200);
  });

  if (isDeleted) {
    cy.get(pimEmployeeElements.searchEmployeeFormElements.employeeFirstRow.selector)
      .should('not.to.exist');

    cy.contains(pimEmployeeElements.searchEmployeeFormElements.employeeFirstRow.noRowsText)
      .should('be.visible');
  } else {
    cy.get(pimEmployeeElements.searchEmployeeFormElements.employeeFirstRow.selector)
      .should('be.visible');

    cy.contains(firstName)
      .should('be.visible');
  }
}

export function updateEmployee() {
  cy.get(generalElements.editPencilButton.selector)
    .first()
    .click();

  checkPersonalDetails();
  fillEmployeeFullName(true);

  clickSaveButton();
}

export function deleteEmployee() {
  cy.get(pimEmployeeElements.searchEmployeeFormElements.employeeFirstRow.selector)
    .should('be.visible');
  cy.get(generalElements.deleteTrashButton.selector)
    .first()
    .click({ force: true });

  cy.get(generalElements.modalElements.modalBody.selectorBody)
    .should('be.visible');
  cy.contains(generalElements.modalElements.modalTitle.text)
    .should('be.visible');
  cy.get(generalElements.modalElements.modalBody.selectorText)
    .should('contain.text', generalElements.modalElements.modalBody.text );

  cy.get(generalElements.modalElements.modalDeleteButton.selector)
    .should('contain.text', generalElements.modalElements.modalDeleteButton.text)
    .click();

}

export function updateAdminUserEmployee() {
  cy.get(pimEmployeeElements.addEmployeeFormElements.employeeFullNameTextFields.employeeFirstName.selector)
    .clear()
    .type('Paul');

  cy.get(pimEmployeeElements.addEmployeeFormElements.employeeFullNameTextFields.employeeMiddleName.selector)
    .clear();

  cy.get(pimEmployeeElements.addEmployeeFormElements.employeeFullNameTextFields.employeeLastName.selector)
    .clear()
    .type('Collings');

  clickSaveButton();
}