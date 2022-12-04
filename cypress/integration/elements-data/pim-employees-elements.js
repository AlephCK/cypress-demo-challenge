import { employeeInfo } from '../../support/inputData';

const addEmployeeButton = {
  selector: '.orangehrm-header-container > .oxd-button',
  text: 'Add'
};
};

const employeeFirstName = {
  selector: 'input[name="firstName"]',
  text: 'James',
  text2: 'John'
};

const employeeMiddleName = {
  selector: 'input[name="middleName"]',
  text: employeeInfo.employeeData.middleName,
  text2: employeeInfo.employeeData.middleName
};

const employeeLastName = {
  selector: 'input[name="lastName"]',
  text: employeeInfo.employeeData.lastName,
  text2: employeeInfo.employeeData.lastName
};

const submitButton = {
  selector: 'button[type=submit]',
  text: 'Save'
}

const employeePersonalDetailHeader = {
  selector: '.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6',
  text: 'Personal Details'
};

const employeeNameDetailTitle = {
  selector: '.orangehrm-edit-employee-name > .oxd-text'
};

const employeeImage = {
  selector: '.employee-image'
};
const employeeSaveButton = {
  selector: '.oxd-button',
  text: 'Save'
};

const employeeNameSearchField = {
  selector: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'
};

const searchButton = {
  selector: '.oxd-form-actions > .oxd-button--secondary',
  text: 'Search'
};

const editEmployeeButton = {
  selector: '.bi-pencil-fill'
};

const deleteEmployeeButton = {
  selector: '.bi-trash'
};

const employeeFullNameTextFields = {
  employeeFirstName,
  employeeMiddleName,
  employeeLastName
};

const employeePersonalDetailsElements = {
  employeePersonalDetailHeader,
  employeeNameDetailTitle,
  employeeImage,
  employeeSaveButton
};

const addEmployeeFormElements = {
  employeeFullNameTextFields,
  submitButton
};

const searchEmployeeFormElements = {
  employeeNameSearchField,
  searchButton,
  employeeFirstRow,
  editEmployeeButton,
  deleteEmployeeButton
};

export const pimElements = {
  addEmployeeButton,
  addEmployeeFormElements,
  employeePersonalDetailsElements,
  searchEmployeeFormElements
};