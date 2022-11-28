import { employeeData } from '../../support/inputData';

const addEmployeeButton = {
  selector: '.orangehrm-header-container > .oxd-button',
  text: 'Add'
}

const employeeFirstName = {
  selector: 'input[name="firstName"]',
  text: employeeData.firstName
}

const employeeMiddleName = {
  selector: 'input[name="middleName"]',
  text: employeeData.middleName
}

const employeeLastName = {
  selector: 'input[name="lastName"]',
  text: employeeData.lastName
}

const submitButton = {
  selector: 'button[type=submit]',
  text: 'Save'
}

const employeeNameDetailTitle = {
  selector: '.orangehrm-edit-employee-name > .oxd-text'
}

const employeeFullNameTextFields = {
  employeeFirstName,
  employeeMiddleName,
  employeeLastName
}

const employeePersonalDetailsElements = {
  employeeNameDetailTitle
}

const addEmployeeFormElements = {
  employeeFullNameTextFields,
  submitButton
}

export const pimElements = {
  addEmployeeButton,
  addEmployeeFormElements,
  employeePersonalDetailsElements
}