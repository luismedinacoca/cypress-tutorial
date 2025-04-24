describe("empty spec", () => {
  // before & after Hooks
  before(() => {
    cy.log("Hello from Before hook");
  });

  after(() => {
    cy.log("Hello from After hook");
  });

  // beforeEach & afterEach hooks:
  beforeEach(() => {
    cy.log("Hello from Before Each hook");
  });

  afterEach(() => {
    cy.log("Hello from After Each hook");
  });

  // each test case for "it"
  it("test case #01", () => {
    cy.log("Hello World - Test Case #01");
  });

  it("test case #02", () => {
    cy.log("Hello World - Test Case #02");
  });

  it("test case #03", () => {
    cy.log("Hello World - Test Case #02");
  });
});
