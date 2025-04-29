describe(`Lecture 075 - Upload a File ${Cypress.env("demoQA")}/upload-download`, () => {
  let uploadFileName = 'example.json';
  beforeEach( () => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });

  it(`Upload a File`, () => {
    cy.get('input[type="file"]#uploadFile')
      .should('be.visible')
      .attachFile(uploadFileName);
    
    cy.get('#uploadedFilePath')
      .should('be.visible')
      .contains(uploadFileName)
      .invoke('text').then( ($text) => {
       expect($text).contains(`C:\\fakepath\\${uploadFileName}`)
        cy.log($text);
      });
  });  
  
});