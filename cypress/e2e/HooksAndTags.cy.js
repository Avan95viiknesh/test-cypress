// four hooks there
// 1. before, it executes before  all the tests and  it executes only once
// 2.after, it executes after all the it blocks and it executes only once
// 3,beforeEach, it will executes multiple time before starting every it block
//4. AfterEach, it will execute multiple times after completion of  each test

//Tags
// skip  for use this skip that particular it block
// only for use run particular test(it block) only 

describe("MyTestSuite", () => {
  before(() => {
    cy.log("*****   Launch app   *****");
  });

  after(() => {
    cy.log("*****   Close app   *****");
  });

  beforeEach(() => {
    cy.log("*****   Login   *****");
  });

  afterEach(() => {
    cy.log("*****   Logout   *****");
  });

  it("Search", () => {
    cy.log("*****   searching    *****");
  });

  it.only("advanced search", () => {
    cy.log("*****   advanced searching    *****");
  });

  it("listing Products", () => {
    cy.log("*****   Listing products    *****");
  });
});
