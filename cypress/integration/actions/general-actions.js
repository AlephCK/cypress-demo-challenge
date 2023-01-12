import { generalElements } from '../elements-data/general-elements';

export function checkTopbarHeaderText(text) {
  cy.get(generalElements.topbarHeader.selector)
    .should('contain.text', text)
    .should('be.visible');
}
export function checkDashboardNavButton() {
  cy.get(generalElements.dashboardNavMenuOption.navSelector)
    .should('be.visible')
    .within(() => {
      cy.contains( generalElements.dashboardNavMenuOption.text);
    });
}

export function clickAddButton() {
  cy.get(generalElements.addButton.selector)
    .should('contains.text', generalElements.addButton.text)
    .click();
}

export function clickSearchButton() {
  cy.get(generalElements.searchButton.selector)
    .should('be.visible')
    .should('contain.text', generalElements.searchButton.text)
    .click({ force: true });
}

export function clickMainMenuItem(option) {
  cy.get(generalElements.sidePanelMenu.selector)
    .within(() => {
      cy.contains(option)
        .click();
    });
}

export function clickSaveButton() {
  cy.get(generalElements.saveButton.selector)
    .should('contains.text', generalElements.saveButton.text)
    .first()
    .click({ force: true });
}

export function checkCompanyLogo() {
  cy.get(generalElements.companyLogo.selector)
    .should('be.visible');
}

export function checkToast(type='default') {
  const toastText = {
    'Updated': generalElements.toastNotification.updatedMessage,
    'Deleted': generalElements.toastNotification.deletedMessage,
    'No Records Found': generalElements.toastNotification.noRecordsFoundMessage,
    'default': generalElements.toastNotification.succesfulMessage
  };

  cy.get(generalElements.toastNotification.selector)
    .should('be.visible')
    .within(() => {
      cy.get(generalElements.toastNotification.selectorMessage)
        .should('be.visible')
        .then((toast) => {
          cy.wrap(toast)
            .should('contain', toastText[type]);
          cy.get(generalElements.toastNotification.closeButton)
            .click();
        });
    });

  cy.get(generalElements.toastNotification.selector)
    .should('not.exist');
}