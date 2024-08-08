const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4xty7y',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projetinho do curso de Cypress',
      reportPageTitle: 'Projetinho do curso de Cypress',

    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
