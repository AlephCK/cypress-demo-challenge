import { loginUser } from "../actions/login-actions";
import { clickMainMenuItem, checkTopbarHeaderText } from "../actions/general-actions"
import { clickAddEmployeeButton, fillEmployeeFullName, clickSaveButton, validateEmployeeFields, checkPersonalDetails } from "../actions/pim-actions"

context('E2E: PIM Tests', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
    loginUser(Cypress.env('TEST_USER'), Cypress.env('TEST_PASSWORD'));
    checkTopbarHeaderText('Dashboard');
    clickMainMenuItem('PIM');
    checkTopbarHeaderText('PIM');
  });

  it('Add a new employee', () => {
    clickAddEmployeeButton();
    fillEmployeeFullName();
    clickSaveButton();
    validateEmployeeFields();
    checkPersonalDetails();
  });

  it('Search an employee', () =>{

  })

  it('Delete an employee', () =>{

  })
})