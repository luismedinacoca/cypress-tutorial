//Cypress.config("defaultCommandTimeout", 16000);
import "cypress-real-events/support";

describe("Test Website Disclaimer", () => {
  it(`Visit ${Cypress.env("theInternet")}`, () => {
    cy.visit(`${Cypress.env("theInternet")}`);
    cy.wait(2000);
  });
});
