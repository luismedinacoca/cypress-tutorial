describe("", ()=> {
    let value = "Luiggie";
    beforeEach(() => {
        cy.visit("http://uitestingplayground.com/textinput");
    })

    it("Challenge", () => {
        cy.get('#newButtonName').type(value);
        cy.wait(2500)
        cy.get('#updatingButton').should("have.text", "Button That Should Change it's Name Based on Input Value");
        cy.wait(1500);
        cy.get('#updatingButton').click().should("have.text", value);
    })
})