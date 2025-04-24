describe(".find() ", () => {
  it("Find an element by its attribute using xpath", () => {
    cy.visit("http://uitestingplayground.com/classattr");
    cy.xpath(
      `//button[contains(concat('', @class, ''), ' btn-warning ')]`
    ).should("have.css", "background-color", "rgb(255, 193, 7)");

    cy.xpath(
      `//button[contains(concat(' ', @class, ' '), ' btn-primary ')]`
    ).should("have.css", "background-color", "rgb(0, 123, 255)");

    cy.xpath(
      `//button[contains(concat(' ', @class, ' '), ' btn-success ')]`
    ).should("have.css", "background-color", "rgb(40, 167, 69)");
  });
});
