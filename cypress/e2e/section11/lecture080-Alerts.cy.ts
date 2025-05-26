describe(`Lecture 080 - Accept Alert Event in${Cypress.env("theInternet")}/javascript_alerts`, () => {
  beforeEach(() => {
      cy.visit(`${Cypress.env("theInternet")}/javascript_alerts`);
  });
      
  it.only('Debería hacer clic en el botón "Click for JS Alert" y aceptar la alerta', () => {
    cy.contains('button', 'Click for JS Alert').click();
    cy.on('window:alert', (message) => {
      //message from the alert
      expect(message).to.equal('I am a JS Alert');
    });

    //Verify Result message value/text:
    cy.contains('You successfully clicked an alert').should('be.visible');
    cy.get('#result').should('have.text', 'You successfully clicked an alert');
    cy.get('#result').should('have.css', 'color', 'rgb(0, 128, 0)')
  });
})