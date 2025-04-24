describe("", ()=> {
    beforeEach(() => {
        cy.visit("http://uitestingplayground.com/textinput");
    })

    it("Title validation", () => {
        cy.title().then((title) => {
            // Printing title:
            cy.log(`URL title is: ${title}`);

            //Validating title value:
            expect(title).to.be.equal('Text Input');
        })
    })
})