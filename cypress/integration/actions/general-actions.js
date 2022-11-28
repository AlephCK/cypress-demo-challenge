import { generalElements } from "../elements-data/general-elements";


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
    })
}

export function clickMainMenuItem(option) {
  cy.get(generalElements.mainMenuItem.selector)
    .within(() => {
      cy.contains(option)
        .click();
    })
}

export function checkCompanyLogo() {
  cy.get(generalElements.companyLogo.selector)
    .should('be.visible');
}