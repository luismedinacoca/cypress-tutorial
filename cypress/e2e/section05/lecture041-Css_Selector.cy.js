describe(".find() ", () => {
  it("CSS selector using an attribute", () => {
    cy.visit("http://uitestingplayground.com/dynamicid");
    cy.log("Button with Dynamic ID");
    cy.get("button[class='btn btn-primary']").should(
      "have.text",
      "Button with Dynamic ID"
    );
  });
});
