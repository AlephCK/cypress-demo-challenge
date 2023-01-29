# Senior Automation Challenge Project

This project contains the Senior Automation Challenge project that consists of:
- Automate 10 test cases for the Orange HRM web application
- Automate 3 API Calls to Marvel API Endpoints, and also automate its invalid scenarios

## UI Testing
The framework containst the following 11 test cases for the webapp https://opensource-demo.orangehrmlive.com/web/index.php/:

* Login
1. Login
2. Invalid Login
3. Logout

* PIM Employees
4. Add an Employee
5. Update an Employee
6. Search an Employee
7. Remove an Employee

* Admin Users
8. Add a System User
9. Update a System User
10. Search a System User
11. Remove a System User

## API Testing

For the API testing it was required to be automated 3 request to the Marvel Comics API Marvel Developer Site.
1. Automate that all the characters can be fetch.
2. Automate that all the comics for Spiderman can be fetch.
3. Automate that all characters for the X-Man comic can be fetch

## Tech Stack
- [Javascript](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [nodeJS](https://nodejs.org/en/about/)
- [Cypress](https://www.cypress.io)
- [cypress-plugin-api](https://www.npmjs.com/package/cypress-plugin-api)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress)
- [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- [blueimp-md5](https://www.npmjs.com/package/blueimp-md5)
- [FakerJS](http://marak.github.io/faker.js/)
- [GitHub Actions](https://github.com/features/actions)

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