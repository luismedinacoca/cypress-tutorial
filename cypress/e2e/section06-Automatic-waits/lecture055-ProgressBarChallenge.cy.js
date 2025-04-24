Cypress.config("defaultCommandTimeout", 16000);

describe("defaultCommandTimeout", () => {
  it("Retry ability demo - visit with delay", () => {
    cy.visit("http://uitestingplayground.com/progressbar");
    //cy.wait(1500);

    cy.get("#startButton").click();
    cy.get("#progressBar", { timeout: 35000 }).should("have.text", "100%");
  });
});
