const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3ecfrp',
  viewportHeight:700,
  viewportWidth:1200,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl:'http://www.google.com'
  },
});
