//Cypress.config("defaultCommandTimeout", 16000);

describe("Click challenge - Click Class & Background color Validations", () => {
  beforeEach(() => {
    cy.visit("http://uitestingplayground.com/click");
  });
  it("Checking Class Assertion", () => {
    cy.wait(1500);
    cy.get("#badButton").click().should("have.class", "btn-success");
    cy.wait(1500);
  });

  it("Checking Background Color Assertion", () => {
    cy.wait(1500);
    cy.get("#badButton")
      .click()
      .should("have.css", "background-color", "rgb(40, 167, 69)");
    cy.wait(1500);
  });
});
