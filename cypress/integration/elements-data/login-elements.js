const loginLogo = {
  selector: '.orangehrm-login-branding'
};

const loginTitle = {
  selector: '.orangehrm-login-title',
  text: 'Login'
};

const usernameField = {
  selector: 'input[name="username"]'
};

const passwordField = {
  selector: 'input[name="password"]'
};

const loginButton = {
  selector: '.orangehrm-login-button',
  text: 'Login'
};

const loginAlert = {
  selector: '.oxd-alert-content > .oxd-text',
  text: 'Invalid credentials'
};

const userDropdown = {
  selector: '.oxd-userdropdown-name'
};

const logoutMenuItem = {
  selector: ':nth-child(4) > .oxd-userdropdown-link',
  text: 'Logout'
};

export const loginElements = {
  loginLogo,
  loginTitle,
  usernameField,
  passwordField,
  loginButton,
  loginAlert,
  userDropdown,
  logoutMenuItem
};