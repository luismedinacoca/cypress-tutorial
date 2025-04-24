describe(".find() ", () => {
  it("cy.get() + cy.find()", () => {
    cy.visit("http://uitestingplayground.com/dynamicid");
    cy.log("Button with Dynamic ID");
    cy.get("div").find("button").should("have.text", "Button with Dynamic ID");
  });
});
