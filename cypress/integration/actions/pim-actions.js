import { pimElements } from "../elements-data/pim-employees-elements";
import { employeeInfo } from '../../support/inputData';

export function clickAddEmployeeButton() {
  cy.get(pimElements.addEmployeeButton.selector)
    .should('contains.text', pimElements.addEmployeeButton.text)
    .click();
}

export function fillEmployeeFullName() {
  Object
    .entries(pimElements.addEmployeeFormElements.employeeFullNameTextFields)
    .forEach(([, value]) => {
      cy.get(value.selector)
        .type(`{selectall}${value.text}`, { delay: 60 });
    });
}

export function validateEmployeeFields() {
  cy.get(pimElements.addEmployeeFormElements.employeeFullNameTextFields.employeeFirstName.selector)
    .should('have.value', employeeInfo.employeeData.firstName);
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