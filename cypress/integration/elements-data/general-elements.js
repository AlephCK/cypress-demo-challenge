const topbarHeader = {
  selector: '.oxd-topbar-header-breadcrumb > .oxd-text',
};

const sidePanelMenu = {
  selector: '.oxd-sidepanel-body'
};

const dashboardNavMenuOption = {
  navSelector: '.active',
  textSelector: '.oxd-text',
  text: 'Dashboard'
};

const mainMenuItem = {
  selector: '.oxd-main-menu-item',
  textSelector: '.oxd-text'
};

const companyLogo = {
  selector: '.oxd-brand-banner > img'
};

const modalTitle = {
  text: 'Are you Sure?'
};

const modalBody = {
  selectorBody: '.orangehrm-dialog-popup',
  selectorText: '.oxd-text',
  text: 'The selected record will be permanently deleted. Are you sure you want to continue?'
};

const modalDeleteButton = {
  selector: '.oxd-button--label-danger',
  text: 'Yes, Delete'
};

const saveButton = {
  selector: '.oxd-button--secondary',
  text: 'Save'
};

const modalElements ={
  modalBody,
  modalTitle,
  modalDeleteButton
};

export const generalElements = {
  topbarHeader,
  sidePanelMenu,
  saveButton,
  dashboardNavMenuOption,
  mainMenuItem,
  companyLogo,
  modalElements
};