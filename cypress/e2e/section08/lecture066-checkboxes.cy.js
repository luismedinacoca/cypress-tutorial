//Cypress.config("defaultCommandTimeout", 16000);

describe("Handling Checkbox - Input not displayed", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/checkboxes`);
    cy.wait(1000);
  });

  it("Checkbox scenario - 1st checkbox", () => {
    cy.get("form#checkboxes input")
      .eq(0)
      .should("be.visible")
      .check()
      .should("be.checked");
    cy.get("form#checkboxes input")
      .eq(1)
      .should("be.visible")
      .uncheck()
      .should("be.not.checked");
  });

  it("Checkbox scenario - 2nd checkbox", () => {
    cy.get("form#checkboxes input").eq(1).should("be.visible").uncheck();
  });
});
