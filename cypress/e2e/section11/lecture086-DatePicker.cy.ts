describe(`Lecture 086 - Date picker ${Cypress.env("demoQA")}/date-picker`, () => {
  beforeEach(() => {
      cy.visit(`${Cypress.env("demoQA")}/date-picker`);
  });
      
  it('Autocomplete demo using Yellow', () => {
    cy.get('#datePickerMonthYearInput').click();
    cy.get('select.react-datepicker__month-select').select("3");
    cy.get('select.react-datepicker__year-select').select('1977');
    //cy.findByText("6").click();
    cy.get('.react-datepicker__day--006').first().click();
    cy.get('#datePickerMonthYearInput').should('have.value', '04/06/1977');
    cy.scrollTo('top');
  });
})

/*
.react-datepicker__day--006.react-datepicker__day--selected
*/