describe(`Lecture 088 - Menu Hover ${Cypress.env("demoQA")}/menu`, () => {
  beforeEach(() => {
      cy.visit(`${Cypress.env("demoQA")}/menu`);
  });
    
  /*
  it('Tooltip Button demo - Hover me to see - NO WORK 💥', () => {
    cy.contains('a', 'Main Item 2').trigger('mouseover');
    cy.get('#nav a').contains('SUB SUB LIST »').trigger('mouseover');
  });
  
  it('Hover with trigger(mouseover) - NO WORK 💥', () => {
    // Hacer mouse hover en "Main Item 2"
    cy.contains('Main Item 2').trigger('mouseover');

    // Verificar que los submenús de "Main Item 2" son visibles
    cy.contains('Sub Item 1').should('be.visible');
    cy.contains('Sub Item 2').should('be.visible');
    cy.contains('SUB SUB LIST »').should('be.visible');

    // Hacer mouse hover en "SUB SUB LIST »"
    cy.contains('SUB SUB LIST »').trigger('mouseover');

    // Verificar que los sub-submenús son visibles
    cy.contains('Sub Sub Item 1').should('be.visible');
    cy.contains('Sub Sub Item 2').should('be.visible');
  });
  
  it('Hover over - triger with timeouts - NO WORK 💥', () => {
    cy.contains('Main Item 2').trigger('mouseover');

    // Verificar que los submenús de "Main Item 2" son visibles
    cy.contains('Sub Item 1', { timeout: 5000 }).should('be.visible'); // Aumenta el timeout a 5 segundos
    cy.contains('Sub Item 2', { timeout: 5000 }).should('be.visible');
    cy.contains('SUB SUB LIST »', { timeout: 5000 }).should('be.visible');

    cy.contains('SUB SUB LIST »').trigger('mouseover');

    // Verificar que los sub-submenús son visibles
    cy.contains('Sub Sub Item 1', { timeout: 5000 }).should('be.visible');
    cy.contains('Sub Sub Item 2', { timeout: 5000 }).should('be.visible');
    
  });

  it('with .realHover() method - NO WORK 💥', () => {
    // Hacer mouse hover en "Main Item 2" usando realHover
    cy.contains('Main Item 2').realHover();

    // Verificar que los submenús de "Main Item 2" son visibles
    cy.contains('Sub Item 1').should('be.visible');
    cy.contains('Sub Item 2').should('be.visible');
    cy.contains('SUB SUB LIST »').should('be.visible');

    // Hacer mouse hover en "SUB SUB LIST »" usando realHover
    cy.contains('SUB SUB LIST »').realHover();

    // Verificar que los sub-submenús son visibles
    cy.contains('Sub Sub Item 1').should('be.visible');
    cy.contains('Sub Sub Item 2').should('be.visible');
  });
  */

  it.only("verifies hover effects on menus", () => {
    // Hover over "Main Item 2" (target the parent <li>)
    cy.contains('li', 'Main Item 2')
      .realHover() // Realistic hover
      .then(() => {
        // Verify submenu items are visible
        cy.contains('a', 'SUB SUB LIST »').should('be.visible');
      });

    // Hover over "SUB SUB LIST »" (target its parent <li>)
    cy.contains('li', 'SUB SUB LIST »')
      .realHover() // Realistic hover
      .then(() => {
        // Verify sub-sub items are visible
        cy.contains('a', 'Sub Sub Item 1').should('be.visible');
        cy.contains('a', 'Sub Sub Item 2').should('be.visible');
      });
  })
})
