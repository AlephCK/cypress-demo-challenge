const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'Automation Challenge',
  video: false,
  viewportHeight: 900,
  numTestsKeptInMemory: 20,
  defaultCommandTimeout: 6000,
  experimentalWebKitSupport: true,
  viewportWidth: 1366,
  chromeWebSecurity: false,
  env: {
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportTitle: 'Automation Tests',
    reportPageTitle: 'Test Automation Results',
    reportFilename: 'automationResults',
    embeddedScreenshots: true,
    charts: true,
    inline: true,
    overwrite: false,
    autoOpen: false,
    timestamp: "longDate",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/specs/**/*.{js,jsx,ts,tsx}',
  },
})

