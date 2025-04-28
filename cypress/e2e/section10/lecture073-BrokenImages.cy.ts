describe(`Lecture 072 - Broken Image in ${Cypress.env("demoQA")}/broken`, () => {
  let img: HTMLImageElement;
  beforeEach( () => {
    cy.visit(`${Cypress.env("demoQA")}/broken`);
  });

  it(`No broken image assertion`, () => {
    cy.get('div > img[src="/images/Toolsqa.jpg"]')
      .should('be.visible')
      .then( ($img) => {
        cy.log('This is the img yielded', $img);
        img = $img[0] as unknown as HTMLImageElement;
        /*
         if(naturalWidth !== 0 ) => No Broken Image 
         */
        expect(img.naturalWidth).to.be.greaterThan(0);
      })
  });  //  /images/Toolsqa_1.jpg

  it.only(`Broken image assertion`, () => {
    cy.get('img[src="/images/Toolsqa_1.jpg"]')
      .then( ($img) => {
        cy.log('This is the img yielded', $img);
        img = $img[0] as unknown as HTMLImageElement;
        /*
         if(naturalWidth === 0 ) => Broken Image 
         */
        expect(img.naturalWidth).to.be.equal(0);
      })
  });
});