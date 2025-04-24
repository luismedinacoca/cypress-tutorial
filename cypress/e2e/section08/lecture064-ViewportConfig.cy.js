//Cypress.config("defaultCommandTimeout", 16000);
import "cypress-real-events/support";

describe("Test Website Disclaimer", () => {
  it(`Visit ${Cypress.env("nucba")}`, () => {
    cy.visit(`${Cypress.env("nucba")}`);
    cy.wait(2000);
  });
  it(`Visit ${Cypress.env("ladrones")}`, () => {
    cy.viewport("iphone-x");
    cy.visit(`${Cypress.env("ladrones")}`);
    cy.wait(2000);
  });
  it(`Visit ${Cypress.env("sauceLabs")}`, () => {
    cy.viewport("ipad-mini");
    cy.visit(`${Cypress.env("sauceLabs")}`);
    cy.wait(2000);
  });
  it(`Visit ${Cypress.env("demoQA")}`, () => {
    cy.viewport(800, 800);
    cy.visit(`${Cypress.env("demoQA")}`);
    cy.wait(2000);
  });
});
