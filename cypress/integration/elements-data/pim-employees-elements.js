import { employeeInfo } from '../../support/inputData';

const employeeFirstName = {
  selector: 'input[name="firstName"]',
  text: 'Cyberto',
  text2: 'Buggerto'
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
};

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

const employeeFirstRow = {
  selector: '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div > div',
  noRowsText: 'No Records Found'
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
  employeeFirstRow,
  editEmployeeButton,
  deleteEmployeeButton
};

export const pimEmployeeElements = {
  addEmployeeFormElements,
  employeePersonalDetailsElements,
  searchEmployeeFormElements
};