const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'Automation Challenge',
  video: false,
  viewportHeight: 900,
  numTestsKeptInMemory: 20,
  defaultCommandTimeout: 6000,
  viewportWidth: 1366,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0
  },
  env: {
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    apiUrl: 'https://gateway.marvel.com:443/v1/public',
    hideCredentials: true,
    snapshotOnly: true,
    requestMode: true
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

