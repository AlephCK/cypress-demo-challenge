# Senior Automation Challenge Project

This project contains the Senior Automation Challenge project that consists of:
- Automate 10 test cases for the Orange HRM web application
- Automate 3 API Calls to Marvel API Endpoints, and also automate its invalid scenarios

## General Requirements

### Dev Install

* Install all dependencies

```bash
npm install
```

### Using credentials to run Cypress Tests

We use the `cypress.env.json` to add the credentials used for both API and e2e specs tests:

```json
{
  "user":{
    "testUser": "Admin",
    "testPassword": "admin123"
  },
  "marvel":{
    "privateKey": "<Insert Marvel API private key here>",
    "publicKey": "<Insert Marvel API public key here>"
  }
}
```

In order to get the Marvel API keys, create a developer account and follow their official documentation here: https://developer.marvel.com/documentation/getting_started

### How To Use Cypress

The following commands can be used in order to run the test cases

Open Cypress UI
```bash
npm run open-gui
```

Run all specs (both API and e2e)
```bash
npm run run-all-specs
```

Run the e2e tests
```bash
npm run run-e2e
```

Run the API tests
```bash
npm run run-api
```

### Before doing a commit

Run ESLint to fix any typos
```bash
npm run lint-fix
```

Run ESLint to look out for any typos
```bash
npm run lint
```