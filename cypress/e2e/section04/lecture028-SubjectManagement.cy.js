describe("Basics", () => {
    beforeEach(() => {
      cy.visit("http://uitestingplayground.com/textinput");
    })
    it("visit explanation text input", () => {
      cy.url().then((url) => {
        cy.log(`Printing the URL: ${url}`)
      })
    });
  });