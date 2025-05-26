describe(`Lecture 081 - Window Confirm Event ${Cypress.env("theInternet")}/javascript_alerts`, () => {
  beforeEach(() => {
      cy.visit(`${Cypress.env("theInternet")}/javascript_alerts`);
  });
      
  it('Debería hacer clic en el botón "Click for JS Alert" y aceptar la alerta', () => {
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
    
  it.only('Debería hacer clic en el botón "Click for JS Confirm" y aceptar la confirmación', () => {
    cy.contains('button', 'Click for JS Confirm').click();
    cy.on('window:confirm', (message) => {
      expect(message).to.be.equal('I am a JS Confirm');
      return true; // Indica que se acepta la confirmación
    });
    cy.contains('You clicked: Ok').should('be.visible');
    cy.get('#result').should('have.text', 'You clicked: Ok');
    cy.get('#result').should('have.css', 'color', 'rgb(0, 128, 0)');
  });
    
  it.only('Debería hacer clic en el botón "Click for JS Confirm" y cancelar la confirmación', () => {
    cy.contains('button', 'Click for JS Confirm').click(); // Selecciona el segundo botón
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('I am a JS Confirm');
      return false; // Indica que se cancela la confirmación
    });
    cy.contains('You clicked: Cancel').should('be.visible');
    cy.get('#result').should('have.text', 'You clicked: Cancel');
    cy.get('#result').should('have.css', 'color', 'rgb(0, 128, 0)')
  });
    
  it('Debería hacer clic en el botón "Click for JS Prompt" y aceptar el prompt ingresando texto', () => {
    const textoIngresado = 'Texto de prueba desde Cypress';
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(textoIngresado);
      cy.get(':nth-child(3) > button').click(); // Selecciona el tercer botón
      cy.contains(`You entered: ${textoIngresado}`).should('be.visible');
    });
  });
    
  it('Debería hacer clic en el botón "Click for JS Prompt" y aceptar el prompt sin ingresar texto (dejando el valor por defecto)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(''); // Simula hacer clic en "Aceptar" sin ingresar nada
      cy.get(':nth-child(3) > button').click(); // Selecciona el tercer botón
      cy.contains('You entered:').should('be.visible'); // El texto después de "You entered:" estará vacío
    });
  });
    
  it('Debería hacer clic en el botón "Click for JS Prompt" y cancelar el prompt', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(null); // Simula hacer clic en "Cancelar"
      cy.get(':nth-child(3) > button').click(); // Selecciona el tercer botón
      cy.contains('You entered: null').should('be.visible');
    });
  });

})