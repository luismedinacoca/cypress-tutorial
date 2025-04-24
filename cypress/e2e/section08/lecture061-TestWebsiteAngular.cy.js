//Cypress.config("defaultCommandTimeout", 16000);
import "cypress-real-events/support";

describe("Test Website Disclaimer", () => {
  it(`Visit ${Cypress.env("angular")}`, () => {
    cy.visit(`${Cypress.env("angular")}`);
    cy.wait(2000);
  });
});
