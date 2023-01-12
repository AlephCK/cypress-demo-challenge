const AddSystemUserHeader = {
  selector: '.orangehrm-card-container > .oxd-text--h6',
  text: 'Add User'
};

const systemUserHeader = {
  selector: '.oxd-table-filter-header-title > .oxd-text',
  text: 'System Users'
};

const addUserFormBody = {
  selector: '.orangehrm-card-container'
};

const userFirstRow = {
  selector: '.oxd-table-card > .oxd-table-row'
};

const deleteUser = {
  selector: '.oxd-table-cell-actions > :nth-child(1)'
};

const userRoleDropdownField = {
  selector: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
  firstOptionSelectText: 'Admin'
};

const employeeNameField = {
  selector: '.oxd-autocomplete-text-input > input',
  firstOptionText: 'Paul Collings'
};

const statusDropdownField = {
  selector: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
  firstOptionSelectText: 'Enabled'
};

const usernameField = {
  selector: ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input',
  searchSelector: ':nth-child(2) > .oxd-input',
  text: 'Test-Admin'
};

const passwordField = {
  selector: '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input',
  confirmPasswordSelector: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
  text: 'Test-Admin123'
};

const confirmPasswordField = {
  selector: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
  text: 'Test-Admin123'
};

const systemUserTextFields = {
  usernameField,
  passwordField,
  confirmPasswordField
};

export const systemUserElements = {
  AddSystemUserHeader,
  systemUserHeader,
  userFirstRow,
  deleteUser,
  addUserFormBody,
  employeeNameField,
  statusDropdownField,
  userRoleDropdownField,
  systemUserTextFields
};