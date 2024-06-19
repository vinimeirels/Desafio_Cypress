const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "usuario": "inserir usuario",
    "senha": "inserir senha"
  }, 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
