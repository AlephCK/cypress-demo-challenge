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
    .type(firstName);

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
      .should('be.visible')
      .each($row => {
        cy.wrap($row) .within(() => {
          cy.contains(firstName)
            .should('be.visible');
        });
      });
  }
}

export function updateEmployee() {
  cy.get(pimEmployeeElements.searchEmployeeFormElements.editEmployeeButton.selector)
    .first()
    .click();

  checkPersonalDetails();
  fillEmployeeFullName(true);

  cy.get(generalElements.saveButton.selector)
    .first()
    .should('contain.text', generalElements.saveButton.text)
    .click();
}

export function deleteEmployee() {
  cy.get(pimEmployeeElements.searchEmployeeFormElements.employeeFirstRow.selector)
    .should('be.visible')
    .each($row => {
      cy.wrap($row).within(() => {
        cy.get(pimEmployeeElements.searchEmployeeFormElements.deleteEmployeeButton.selector)
          .first()
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
    });
}