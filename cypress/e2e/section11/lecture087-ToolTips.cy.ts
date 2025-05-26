describe(`Lecture 087 - Tool Tips ${Cypress.env("demoQA")}/tool-tips`, () => {
  beforeEach(() => {
      cy.visit(`${Cypress.env("demoQA")}/tool-tips`);
  });
      
  it('Tooltip Button demo - Hover me to see', () => {
    cy.get('#toolTipButton').trigger('mouseover');
    cy.get('#buttonToolTip').should('be.visible')
    cy.get('div[role="tooltip"]').should('be.visible')
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button');
  });
  
  it('Tooltip Button demo - Hover over the Contrary', () => {
    cy.contains('a', 'Contrary').trigger('mouseover');
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the Contrary');
  });
  
  it.only('Tooltip Button demo - Hover over the Contrary', () => {
    cy.contains('a', '1.10.32').trigger('mouseover');
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the 1.10.32');
    
  });
})
