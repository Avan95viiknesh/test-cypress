describe("MyTestSuite", () => {
  // Direct access

  it("FixturesDemoTest", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.fixture("orangehrm").then((data) => {
      // orangehrm is file of orangehrm.json
      cy.get("input[placeholder='Username']").type(data.username);
      cy.get("input[placeholder='Password']").type(data.password);
      cy.get("button[type='submit']").click();

      // cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
      cy.get(":nth-child(2) > .oxd-main-menu-item").should(
        "have.text",
        data.expected
      );
    });
  });

  // Access through Hook - for multiple it blocks

  let userdata;
  before(() => {
    cy.fixture("orangehrm").then((data) => {
      userdata = data;
    });
  });

  it.only("FixturesDemoTest", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username']").type(userdata.username);
    cy.get("input[placeholder='Password']").type(userdata.password);
    cy.get("button[type='submit']").click();

    // cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
    cy.get(":nth-child(2) > .oxd-main-menu-item").should(
      "have.text",
      userdata.expected
    );
  });
});
