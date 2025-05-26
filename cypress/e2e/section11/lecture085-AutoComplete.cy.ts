describe(`Lecture 085 - Autocomplete ${Cypress.env("demoQA")}/auto-complete`, () => {
  beforeEach(() => {
      cy.visit(`${Cypress.env("demoQA")}/auto-complete`);
  });
      
  it('Autocomplete demo using Yellow', () => {
    // #react-select-2-option-0
    cy.get('#autoCompleteMultipleContainer').type('Y')
    //cy.get('#react-select-2-option-0').click();
    cy.contains('#react-select-2-option-0', 'Yellow').click();
    cy.scrollTo('top');
    cy.get('.auto-complete__multi-value__label').should('have.text', 'Yellow');
    cy.wait(1000);
  });
})