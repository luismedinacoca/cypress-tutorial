//Cypress.config("defaultCommandTimeout", 16000);
import "cypress-real-events/support";

describe("Hover challenge", () => {
  beforeEach(() => {
    cy.visit("http://uitestingplayground.com/");
    cy.wait(1000);
    cy.get('[href="/mouseover"]').click();
    //cy.wait(5000);
  });

  it("Hover with Cypress workaround", () => {
    cy.get('[title="Click me"]').should(
      "have.css",
      "color",
      "rgb(0, 123, 255)"
    );
    cy.get('[title="Click me"]').trigger("mouseover").should("be.visible");
    //cy.wait(200);

    // cy.get('[title="Click me"]')
    //   .trigger("mouseover")
    //   .then(($el) => {
    //     cy.wrap($el).should("have.css", "color", "rgb(82.7, 62, 0)");
    //   });
  });

  it("Hover and verify tooltip or visual change", () => {
    /* .realHoever() does not work */
    //cy.get('[title="Click me"]').realHover();
    cy.get('[title="Click me"]').click();
  });
});
