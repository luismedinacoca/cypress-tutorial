describe(`Lecture 077 - Nested Iframes in ${Cypress.env("demoQA")}/nestedframes`, () => {
  let uploadFileName = 'example.json';
  beforeEach( () => {
    cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
  });

  it(`Access to each Iframes`, () => {
    cy.wait(1000);

    cy.get('#frame1').then(($iframe) => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body)
        .should('be.visible')
        .should('have.text', 'Parent frame');

      cy.wrap($body).find('iframe').then( ($childIframe) => {
        const $childBody = $childIframe.contents().find('body');
        cy.wrap($childBody)
          .should('be.visible')
          .should('have.text', 'Child Iframe');
        cy.wrap($childBody)
          .find('p')
          .should('have.text', 'Child Iframe');
      
      })
    })
  });  
  
});