describe(`Lecture 072 - Broken Image in ${Cypress.env("demoQA")}/broken`, () => {
  let img: HTMLImageElement;
  beforeEach( () => {
    cy.visit(`${Cypress.env("theInternet")}/broken_images`);
  });

  it(`No broken image assertion`, () => {
    
  });  
  
});