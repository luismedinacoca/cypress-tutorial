describe("Basics", () => {
  beforeEach(() => {
    cy.visit("http://uitestingplayground.com/textinput");
  })
  it("Visit explanation", () => {
    cy.log("Test Case # 01")
  });

  it("Visit explanation", () => {
    cy.log("Test Case # 02")
  });

  it("Visit explanation", () => {
    cy.log("Test Case # 03")
  });
});
