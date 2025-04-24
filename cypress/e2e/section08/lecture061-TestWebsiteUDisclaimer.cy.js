//Cypress.config("defaultCommandTimeout", 16000);
import "cypress-real-events/support";

describe("Test Website Disclaimer", () => {
  it(`Visit ${Cypress.env("nucba")}`, () => {
    cy.visit(`${Cypress.env("nucba")}`);
    cy.wait(2000);
  });
  it(`Visit ${Cypress.env("ladrones")}`, () => {
    cy.visit(`${Cypress.env("ladrones")}`);
    cy.wait(2000);
  });
  it(`Visit ${Cypress.env("sauceLabs")}`, () => {
    cy.visit(`${Cypress.env("sauceLabs")}`);
    cy.wait(2000);
  });
});
