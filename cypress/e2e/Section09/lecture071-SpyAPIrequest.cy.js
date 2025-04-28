describe(`Lecture 071 - Spying an API request after Clicking a link`, () => {
  beforeEach( () => {
    cy.visit(`${Cypress.env("demoQA")}/links`);
    cy.intercept('GET', `${Cypress.env("demoQA")}/created`).as('linkStatus');
  });

  it(`Intercepting/Spying API request after clicking on a button`, () => {
    cy.get('a#created').click();
    cy.wait('@linkStatus').then( (request) => {
      cy.log('This is the intercepted request:', request).then( () => {
        expect(request.response.statusCode).to.be.equal(201);
        expect(request.response.statusMessage).to.be.equal('Created');
      })
      
      cy.log('const { statusCode, statusMessage } = request.response;').then( () => {
        const { statusCode, statusMessage } = request.response;
        expect(statusCode).to.be.equal(201);
        expect(statusMessage).to.be.equal('Created');
      })
    });
  });  
});

describe.skip(`Lecture 071 - Spying an API request after Clicking a link`, () => {
  beforeEach( () => {
    cy.visit(`${Cypress.env("demoQA")}/links`);
    cy.intercept('GET', `${Cypress.env("demoQA")}/no-content`).as('status');
  });

  it(`Intercepting/Spying API request after clicking on a button`, () => {
    //click the button which is the source of API call
    cy.get('a#created').click();

    //Waiting for the API call in backend
    cy.wait('@status').then( (req) => {
      cy.log('This is the intercepted request:', req)
      
      // cy.log('Applying Object destructuring:')
      // cy.log('const { statusCode, statusMessage } = request.response;').then( () => {
      //   const { statusCode, statusMessage } = request.response;
        
      // })
    });
  });  
});
