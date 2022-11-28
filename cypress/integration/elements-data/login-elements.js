const usernameField = {
 selector: 'input[name="username"]'
};

const passwordField = {
 selector: 'input[name="password"]'
}

const loginButton = {
 selector: '.orangehrm-login-button',
 text: 'Login'
}

const loginAlert = {
  selector: '.oxd-alert-content > .oxd-text',
  text: 'Invalid credentials'
}

export const loginElements = {
 usernameField,
 passwordField,
 loginButton,
 loginAlert
}