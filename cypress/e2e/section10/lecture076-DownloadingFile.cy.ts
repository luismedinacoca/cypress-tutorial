describe(`Lecture 075 - DOwnload a File ${Cypress.env("demoQA")}/upload-download`, () => {
  let uploadFileName = 'example.json';
  beforeEach( () => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });

  it(`Download a File`, () => {
    cy.get('a#downloadButton')
      .should('be.visible').click();

      cy.verifyDownload('sampleFile.jpeg');
  });  
  
});