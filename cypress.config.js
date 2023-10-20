const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3ecfrp', // cypress ile projeyi bagladiktan sonra buraya geldi
  viewportHeight:700,
  viewportWidth:1200,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl:'http://www.google.com'
    // video: false --> video kaydi alinmasini engeller
    // retire: 2 --> fail olan testlerin iki kez daha calismasini saglar


  },
});
