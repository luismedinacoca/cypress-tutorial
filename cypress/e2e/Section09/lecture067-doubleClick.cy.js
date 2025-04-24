//Cypress.config("defaultCommandTimeout", 16000);

describe("Double click vs Right click", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/buttons`);
  });

  it("Double click: `.dblclick()` command", () => {
    cy.get("#doubleClickBtn").should("be.visible").dblclick();
    cy.get("#doubleClickMessage")
      .should("be.visible")
      .and("have.text", "You have done a double click");
  });

  it("Right click: `.rightclick()`", () => {
    cy.get("#rightClickBtn").should("be.visible").rightclick();
    cy.get("#rightClickMessage")
      .should("be.visible")
      .and("have.text", "You have done a right click");
  });
  it.only("Dynamic click: `.click()` command", () => {
    cy.get("button.btn.btn-primary")
      .last()
      .should("be.visible")
      .and("have.text", "Click Me")
      .click({ force: true });
    cy.get("#dynamicClickMessage")
      .should("be.visible")
      .and("have.text", "You have done a dynamic click");
  });
});
