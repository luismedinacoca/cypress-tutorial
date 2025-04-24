//Cypress.config("defaultCommandTimeout", 16000);
import "cypress-real-events/support";

describe("Handling Checkbox - Input not displayed", () => {
  it(`Visit ${Cypress.env("demoQA")}/checkbox`, () => {
    cy.visit(`${Cypress.env("demoQA")}/checkbox`);
    cy.get("input[type='checkbox']").should("exist").click({ force: true });
    cy.get("#result").should(
      "have.text",
      "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile"
    );
    cy.wait(3000);
  });
});
