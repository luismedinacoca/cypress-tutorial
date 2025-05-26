//Cypress.config("defaultCommandTimeout", 16000);
import "cypress-real-events/support";

describe("Using Fixture data", () => {
  it(`Loading a file and displaying its data in the log`, () => {
    cy.fixture('example').then((data) => {
        cy.log(data);
        cy.log(data.body);
        cy.log(data.email);
        cy.log(data.name);
    })
  });
});
