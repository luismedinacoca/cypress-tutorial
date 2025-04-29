describe(`Lecture 078 - Writing on Iframes from ${Cypress.env("theInternet")}/iframe`, () => {
  let uploadFileName = 'example.json';
  beforeEach( () => {
    cy.visit(`${Cypress.env("theInternet")}/iframe`);
  });

  it(`Access to each Iframes`, () => {
    /*
    cy.get('#mce_0_ifr').then( ($iframe) => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body)
        .should('be.visible')
        .should('have.text', 'Your content goes here.');
      
      cy.wrap($body).find('p').type('{selectAll} {del} Hello World!')
    })
    */
   
    cy.iframe('#mce_0_ifr') // Reemplaza '#tuIframe' con el selector de tu iframe
      //.find('body#tinymce')
      .find('p')
      .then($paragraph => {
        //$paragraph.text('Nuevo contenido escrito por Cypress.');
        // O también puedes usar .html() si necesitas insertar HTML
        // $paragraph.html('<strong>Nuevo contenido</strong> escrito por Cypress.');

        const nuevoTexto = 'Hello World.';
          cy.log(`Sobre escribiendo el texto del iframe a: "${nuevoTexto}"`);
          $paragraph.text(nuevoTexto);

          cy.iframe('#mce_0_ifr')
          .find('p')
          .should('have.text', nuevoTexto);  
      });
  });  
  
});