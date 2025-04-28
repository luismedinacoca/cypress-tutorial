describe(`Lecture 069 - Link opens new tabs `, () => {
  beforeEach( () => {
    cy.visit(`${Cypress.env("demoQA")}/links`);
    //cy.intercept({ resourcetype: /xhr|fetch/ }, { log: false });
    cy.wait(1000)
  });

  it.only(`First approach, not click on the link`, () => {
    cy.get('#simpleLink').should('be.visible').should('have.attr', 'target','_blank').should('have.attr', 'href','https://demoqa.com').and('have.text', 'Home');
    cy.wait(1500);
  });

  it(`Right click on ${Cypress.env("demoQA")}/buttons`, () => {
    
  });

  it(`Dynamic click on ${Cypress.env("demoQA")}/buttons`, () => {
    
  });
});
