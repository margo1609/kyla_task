const { defineConfig } = require("cypress")
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  viewportWidth: 1980,
  viewportHeight: 1024,
  includeShadowDom: true,
  e2e: {
    experimentalSessionAndOrigin: true,
    testIsolation: "legacy",
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
  },
});
