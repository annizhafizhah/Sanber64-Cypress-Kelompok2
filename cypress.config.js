const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com",
    defaultCommandTimeout: 7000,
    setupNodeEvents(on, config) {
      // event listeners
    },
  },
});
