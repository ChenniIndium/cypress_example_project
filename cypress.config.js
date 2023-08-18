const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://example.cypress.io',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    // integrationFolder: "cypress/integration",
    // testFiles: "**/*.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
