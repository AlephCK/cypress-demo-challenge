import { employeeInfo } from '../../support/inputData';

const addEmployeeButton = {
  selector: '.orangehrm-header-container > .oxd-button',
  text: 'Add'
}

const employeeFirstName = {
  selector: 'input[name="firstName"]',
  text: employeeInfo.employeeData.firstName
}

const employeeMiddleName = {
  selector: 'input[name="middleName"]',
  text: employeeInfo.employeeData.middleName
}

const employeeLastName = {
  selector: 'input[name="lastName"]',
  text: employeeInfo.employeeData.lastName
}

const submitButton = {
  selector: 'button[type=submit]',
  text: 'Save'
}

const employeePersonalDetailHeader = {
  selector: '.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6',
  text: 'Personal Details'
}

const employeeNameDetailTitle = {
  selector: '.orangehrm-edit-employee-name > .oxd-text'
}

const employeeImage = {
  selector: '.employee-image'
}

const employeeFullNameTextFields = {
  employeeFirstName,
  employeeMiddleName,
  employeeLastName
}

const employeePersonalDetailsElements = {
  employeePersonalDetailHeader,
  employeeNameDetailTitle,
  employeeImage
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