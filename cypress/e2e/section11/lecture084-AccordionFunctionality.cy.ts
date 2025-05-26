describe(`Lecture 082 - Alert with Input value in ${Cypress.env("demoQA")}/accordian`, () => {
  beforeEach(() => {
      cy.visit(`${Cypress.env("demoQA")}/accordian`);
  });
      
  it('Default Accordion validation example', () => {
    cy.get('#section1Heading').next()
      .should('have.css', 'display', 'block')
      .and('have.class', 'show');
    cy.get('#section2Heading').next().should('have.css', 'display', 'none');
    cy.get('#section3Heading').next().should('have.css', 'display', 'none');

    cy.log("Click on second heading accordion:")
    cy.get('#section2Heading').click();
    cy.get('#section2Heading').next()
      .should('have.css', 'display', 'block')
      .and('have.class', 'show');
    cy.get('#section1Heading').next().should('have.css', 'display', 'none');
    cy.get('#section3Heading').next().should('have.css', 'display', 'none');
  });
})