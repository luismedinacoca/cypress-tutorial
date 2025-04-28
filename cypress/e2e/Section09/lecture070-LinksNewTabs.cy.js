describe(`Lecture 070 - Link opens new tabs `, () => {
  beforeEach( () => {
    cy.visit(`${Cypress.env("demoQA")}/links`);
    //cy.intercept({ resourcetype: /xhr|fetch/ }, { log: false });
    cy.wait(1000)
  });

  it(`First approach, not click on the link`, () => {
    cy.get('#simpleLink').should('be.visible').should('have.attr', 'target','_blank').should('have.attr', 'href','https://demoqa.com').and('have.text', 'Home');
    cy.wait(1500);
  });

  it(`Second approach - remove the target`, () => {
    cy.get('#simpleLink')
      .should('be.visible')
      .should('have.attr', 'target','_blank')
      .should('have.attr', 'href','https://demoqa.com')
      .and('have.text', 'Home');
    
    cy.get('#simpleLink')
      .invoke('removeAttr', 'target')
      .click();

    cy.url().then( (url) => {
      expect(url).to.be.equal('https://demoqa.com/');
    });

    cy.wait(2000);
  });

  
});
