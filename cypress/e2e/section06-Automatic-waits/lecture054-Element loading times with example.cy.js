Cypress.config("defaultCommandTimeout", 16000);

describe("defaultCommandTimeout", () => {
  it("Retry ability demo - visit with delay", () => {
    cy.visit("http://uitestingplayground.com/clientdelay");
    cy.get("#ajaxButton").click();
    //cy.wait(2000);

    cy.get(".bg-success")
      .should("be.visible")
      .and("have.text", "Data calculated on the client side.");
  });
});
