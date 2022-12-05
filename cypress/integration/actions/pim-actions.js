import { pimElements } from '../elements-data/pim-employees-elements';
import { generalElements } from '../elements-data/general-elements';

export function clickAddEmployeeButton() {
  cy.get(pimElements.addEmployeeButton.selector)
    .should('contains.text', pimElements.addEmployeeButton.text)
    .click();
}

export function fillEmployeeFullName(useSecondaryText = false) {
  Object
    .entries(pimElements.addEmployeeFormElements.employeeFullNameTextFields)
    .forEach(([, value]) => {
      cy.get(value.selector)
        .clear()
        .type(`{selectall}${useSecondaryText ? value.text2 : value.text}`, { delay: 60 });
    });
}

export function validateEmployeeFields(secondaryText = false) {
  cy.get(pimElements.addEmployeeFormElements.employeeFullNameTextFields.employeeFirstName.selector)
    .should('have.value', secondaryText ? pimElements.addEmployeeFormElements.employeeFullNameTextFields.employeeFirstName.text2 : pimElements.addEmployeeFormElements.employeeFullNameTextFields.employeeFirstName.text);
}


export function checkPersonalDetails() {
  cy.get(pimElements.employeePersonalDetailsElements.employeeImage.selector)
    .should('be.visible');

  cy.get(pimElements.employeePersonalDetailsElements.employeePersonalDetailHeader.selector)
    .should('be.visible')
    .should('contain.text', pimElements.employeePersonalDetailsElements.employeePersonalDetailHeader.text);
}

export function clickSaveButton() {
  cy.intercept({
    method: 'GET',
    url: '**/personal-details'
  }).as('call');

  cy.get(pimElements.addEmployeeFormElements.submitButton.selector)
    .should('contains.text', pimElements.addEmployeeFormElements.submitButton.text)
    .click();

  cy.wait('@call').then(({response}) => {
    expect(response.statusCode).to.eq(200);
  });
}

export function clickSearchButton() {
  cy.get(pimElements.searchEmployeeFormElements.searchButton.selector)
    .should('contain.text', pimElements.searchEmployeeFormElements.searchButton.text)
    .click();
}

export function searchEmployeeByName(firstName, isDeleted = false) {
  cy.get(pimElements.searchEmployeeFormElements.employeeNameSearchField.selector)
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
    cy.get(pimElements.searchEmployeeFormElements.employeeFirstRow.selector)
      .should('not.to.exist');

    cy.contains(pimElements.searchEmployeeFormElements.employeeFirstRow.noRowsText)
      .should('be.visible');
  } else {
    cy.get(pimElements.searchEmployeeFormElements.employeeFirstRow.selector)
      .should('be.visible')
      .within(() => {
        cy.contains(firstName)
          .should('be.visible');
      });
  }
}

export function updateEmployee() {
  cy.get(pimElements.searchEmployeeFormElements.editEmployeeButton.selector)
    .first()
    .click();

  checkPersonalDetails();
  fillEmployeeFullName(true);

  cy.get(pimElements.employeePersonalDetailsElements.employeeSaveButton.selector)
    .first()
    .should('contain.text', pimElements.employeePersonalDetailsElements.employeeSaveButton.text)
    .click();
}

export function deleteEmployee() {
  cy.get(pimElements.searchEmployeeFormElements.employeeFirstRow.selector)
    .should('be.visible')
    .within(() => {
      cy.get(pimElements.searchEmployeeFormElements.deleteEmployeeButton.selector)
        .first()
        .click();
    });

  cy.get(generalElements.modalElements.modalBody.selectorBody)
    .should('be.visible')
    .within(() => {
      cy.contains(generalElements.modalElements.modalTitle.text)
        .should('be.visible');

      cy.get(generalElements.modalElements.modalBody.selectorText)
        .should('contain.text', generalElements.modalElements.modalBody.text );
    });

  cy.get(generalElements.modalElements.modalDeleteButton.selector)
    .should('contain.text', generalElements.modalElements.modalDeleteButton.text)
    .click();
}