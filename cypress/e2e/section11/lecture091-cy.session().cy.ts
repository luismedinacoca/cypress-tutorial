//Cypress.session.clearAllSavedSessions();

describe(`Lecture 091 - with cy.session() - ${Cypress.env("demoQA")}/login`, () => {

  before( () => {
    cy.session('my session', () => {
      cy.visit(`${Cypress.env("demoQA")}/login`);
      cy.get('#userName').type('test');
      cy.get('#password').type('Test1234*');
      cy.get('#login').click();

      cy.url().should('contain', 'profile');
    })
  })

  it("Go to Books", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
    cy.get('#gotoStore')
      .should('be.visible')
      .click();
    cy.url().should('contain', 'books')  
  })
  
  it("Log out", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
    cy.get('#books-wrapper')
      .then( ($el) => {
        cy.get('#submit')
          .click();
      })
  })
})

describe.only(`Pruebas con Sesión de Usuario en ${Cypress.env("demoQA")}/login`, () => {
  beforeEach(() => {
    cy.session('demoqa_session', () => {
      // Pasos para iniciar sesión
      cy.visit(`${Cypress.env("demoQA")}/login`);
      cy.get('#userName').type('testuser');
      cy.get('#password').type('Test@123');
      cy.get('#login').click();

      // Asegurarse de que la sesión se estableció correctamente
      cy.url().should('include', '/profile');
      //cy.get('[id="see-book-Learning JavaScript Design Patterns"]').should('contain', 'Learning JavaScript Design Patterns');
      cy.get('#userName-value').should('contain', 'testuser');
    }, {
      validate() {
        // Validación para verificar si la sesión ya está activa
        cy.visit(`${Cypress.env("demoQA")}/profile`);
        cy.url().should('include', '/profile');
        //cy.get('[id="see-book-Learning JavaScript Design Patterns"]').should('contain', 'Learning JavaScript Design Patterns');
        cy.get('#userName-value').should('contain', 'testuser');
      },
      cacheAcrossSpecs: true, // Opcional: para compartir la sesión entre diferentes archivos de prueba
    });
  });

  it('debería estar en la página de perfil con la sesión establecida', () => {
    cy.visit(`${Cypress.env("demoQA")}/profile`);
    cy.url().should('include', '/profile');
    //cy.get('[id="see-book-Learning JavaScript Design Patterns"]').should('contain', 'Learning JavaScript Design Patterns');
    cy.get('#userName-value').should('contain', 'testuser');
  });

  it('debería ver la lista de libros del usuario', () => {
    cy.visit(`${Cypress.env("demoQA")}/profile`);
    cy.get('#books-wrapper').should('be.visible');
    cy.get('.rt-table .rt-tbody .rt-tr-group').should('have.length.greaterThan', 0);
  });
});


describe(`Lecture 091 - no cy.session() - ${Cypress.env("demoQA")}/login`, () => {
  beforeEach(() => {
      cy.visit(`${Cypress.env("demoQA")}/login`);
      cy.get('#userName').type('test');
      cy.get('#password').type('Test1234*');
      cy.get('#login').click();

      cy.url().should('contain', 'profile');
  });
    
  
  it("Go to Books", () => {
    cy.get('#gotoStore')
      .should('be.visible')
      .click();
    cy.url().should('contain', 'books')  
  })
  
  it("Log out", () => {
    cy.get('#books-wrapper')
      .then( ($el) => {
        cy.get('#submit')
          .click();
      })
  })
})