//Cypress.config("defaultCommandTimeout", 16000);
import "cypress-real-events/support";

describe("Test Website Disclaimer", () => {
  it(`Visit ${Cypress.env("demoQA")}`, () => {
    cy.visit(`${Cypress.env("demoQA")}`);
    cy.wait(2000);
  });
});
