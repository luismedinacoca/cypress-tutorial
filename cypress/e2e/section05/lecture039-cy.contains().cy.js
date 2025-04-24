describe("Dynamic Id", ()=> {
    let value = "Luiggie";
    beforeEach(() => {
        cy.visit("http://uitestingplayground.com/dynamicid");
    })

    it("cy.contains()", () => {
        cy.log("Button with Dynamic ID");
        cy.contains("Button with Dynamic ID").should("have.text", 'Button with Dynamic ID');

    })
})