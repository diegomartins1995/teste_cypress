const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Teste Cypress',
      embeddedScreenshots: true,
      saveAllAttempts: false,
      reportDir: "cypress/reports",
      html: true,
      json: true,
    },
  },
  defaultCommandTimeout: 20000,
  viewportWidth: 1000,
  viewportHeight: 660,
  experimentalMemoryManagement: true,
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    retries: {
      runMode: 1,
      openMode: 1,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
