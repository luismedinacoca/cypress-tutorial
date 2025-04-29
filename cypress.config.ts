import { defineConfig } from "cypress";
const { isFileExist, findFiles } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    // baseUrl: "",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {isFileExist, findFiles });
    },
    env: {
      demoVar: "Hello from Cypress Environment Variable: 'Cypress.Config.ts'",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com/",
      angular: "https://www.globalsqa.com/angular/",
      nucba: "https://nucba-zappi2-0.vercel.app",
      ladrones: "https://www.brandshoes.com.ar",
      sauceLabs: "https://www.saucedemo.com",
    },
  },
  pageLoadTimeout: 60000,
  viewportHeight:972,
  viewportWidth: 1512,
});
