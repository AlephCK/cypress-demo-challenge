import { pimElements } from "../elements-data/pim-employees-elements";

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
  Object
    .entries(pimElements.addEmployeeFormElements.employeeFullNameTextFields)
    .forEach(([, value]) => {
      cy.get(value.selector)
        .should('have.value', value.text)
    });
}

export function checkPersonalDetails() {
  let name = pimElements.addEmployeeFormElements.employeeFullNameTextFields.employeeFirstName + ' ' + pimElements.addEmployeeFormElements.employeeFullNameTextFields.employeeLastName;
  cy.waitUntil(() => cy.get(pimElements.employeePersonalDetailsElements.employeeNameDetailTitle)
    .should('contain.text', name), {
      timeout: 2500,
      interval: 100
  });
}

export function clickSaveButton() {
  cy.get(pimElements.addEmployeeFormElements.submitButton.selector)
  .should('contains.text', pimElements.addEmployeeFormElements.submitButton.text)
  .click();
}