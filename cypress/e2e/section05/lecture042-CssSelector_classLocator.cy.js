describe(".find() ", () => {
  it("Class Locator - CSS selector", () => {
    cy.visit("http://uitestingplayground.com/dynamicid");
    cy.log("Button with Dynamic ID");
    cy.get(".btn.btn-primary").should("have.text", "Button with Dynamic ID");
  });
});
