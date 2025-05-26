describe(`Lecture 089 - Drag and Drop Test - Droppable ${Cypress.env("demoQA")}/droppable`, () => {
  beforeEach(() => {
      cy.visit(`${Cypress.env("demoQA")}/droppable`);
  });
    
  
  it.only("verifies hover effects on menus", () => {
    // Optional: visually confirm the elements exist
    cy.get('#draggable').should('be.visible');
    cy.get('#droppable').should('be.visible');

    // Perform real drag and drop
    cy.get('#draggable').drag('#droppable', {force: true});

    // Verify that the drop was successful
    cy.get('#droppable')
      .invoke('text')
      .then((text) => {
        // The droppable area changes its text content to "Dropped!"
        expect(text.trim()).to.equal('Dropped!');
      });
  })

  it('should drag #draggable into #droppable and verify the drop', () => {
    // Optional: visually confirm the elements exist
    cy.get('#draggable').should('be.visible');
    cy.get('#droppable').should('be.visible');

    // Perform real drag and drop
    cy.get('#draggable').realMouseDown();
    cy.get('#droppable').realMouseMove(); // move to target
    cy.get('#droppable').realMouseUp();

    // Verify that the drop was successful
    cy.get('#droppable')
      .invoke('text')
      .then((text) => {
        // The droppable area changes its text content to "Dropped!"
        expect(text.trim()).to.equal('Dropped!');
      });

    // Alternatively, check for a CSS class change if applicable
    cy.get('#droppable').should('have.class', 'ui-state-highlight');
  })

  it( "should drag #draggable into #droppable using realDrag", () => {
    // Ensure both elements are visible and exist in DOM
    cy.get('#draggable', { timeout: 10000 }).should('be.visible');
    cy.get('#droppable', { timeout: 10000 }).should('be.visible');

    // Ensure both elements are present and visible
    cy.get('#draggable').should('be.visible');
    cy.get('#droppable').should('be.visible');

    // Use realDrag (now with TypeScript support)
    //cy.get('#draggable').realDrag('#droppable');
    cy.get('#droppable').then(($target) => {
      cy.get('#draggable').realDrag($target);
    });

    // Assert successful drop
    cy.get('#droppable')
      .invoke('text')
      .should('contain', 'Dropped!');
  })
})
