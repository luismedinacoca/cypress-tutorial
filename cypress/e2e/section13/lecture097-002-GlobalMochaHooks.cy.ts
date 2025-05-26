
describe('Test Suite', () => {
  before(() => { 
    cy.log('💥 Describe before'); 
  });

  beforeEach(() => { 
    cy.log('>>>> Describe beforeEach'); 
  });

  it('Test 1', () => { 
    cy.log('Test Case 01'); 
  });

  it('Test 2', () => { 
    cy.log('Test Case 02'); 
  });

  afterEach(() => { 
    cy.log('Describe afterEach <<<<<'); 
  });

  after(() => { 
    cy.log('💥 💥 Describe after'); 
  });
});

