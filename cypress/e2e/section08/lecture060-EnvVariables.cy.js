//Cypress.config("defaultCommandTimeout", 16000);
import "cypress-real-events/support";

describe("Environment Variable Demo", () => {
  it("Demo", () => {
    cy.log(`Printint Environment Variable Value: "${Cypress.env("demoVar")}"`);
  });
});
