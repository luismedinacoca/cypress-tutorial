import { testData } from './model';

describe("Using Fixture data", () => {
  beforeEach(() => {
    cy.fixture('example').as('data')
  });

  it(`Loading a file and displaying its data in the log`, () => {
    cy.get('@data').then((data) => {
      cy.log('data: ', data);
    })
  });

  it(`Displaying data in the log - name`, () => {
    cy.get<testData>('@data').then((datum) => {
      cy.log('datum.name: ', datum.name);
    })
  });

  it(`Displaying data in the log - body`, () => {
    cy.get<testData>('@data').then((datum) => {
      cy.log('datum.body: ', datum.body);
    })
  });

  it(`Displaying data in the log - email`, () => {
    cy.get<testData>('@data').then((datum) => {
      cy.log('datum.email: ', datum.email);
    })
  });
});
