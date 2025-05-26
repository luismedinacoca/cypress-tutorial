/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to perform real drag-and-drop using cypress-real-events
       * @example cy.get('.draggable').realDrag('.droppable')
       */
      realDrag: (this: Chainable<Subject>, target: string | HTMLElement | JQuery<HTMLElement>) => Chainable<Subject>;
    }
  }