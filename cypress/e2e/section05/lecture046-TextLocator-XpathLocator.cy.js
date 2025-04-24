describe(".find() ", () => {
  it("Class Locator - CSS selector", () => {
    cy.visit("http://uitestingplayground.com/classattr");
    cy.xpath('//*[text()="Correct variant is"]').should(
      "contain.text",
      "Correct"
    );
  });
});
