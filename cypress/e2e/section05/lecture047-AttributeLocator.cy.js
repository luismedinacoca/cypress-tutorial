describe(".find() ", () => {
  it("Find an element by its attribute using xpath", () => {
    cy.visit("http://uitestingplayground.com/classattr");
    cy.xpath(`//code[@class=" language-bash"]`).should(
      "contain.text",
      "normalize-space"
    );
    //cy.wait(1500);
    cy.xpath(`//button[contains(@class,"btn-warning btn-test")]`).should(
      "contain.text",
      "Button"
    );
});
