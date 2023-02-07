describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // implicit assertions use only should , and
    // cy.url().should('includes', 'orangehrmlive.com')
    // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')   // method 1
    // cy.url().should('contain', 'orangehrm')

    // cy.url().should('includes', 'orangehrmlive.com')
    //  .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')  // method 2
    //  .should('contain', 'orangehrm')

    cy.url()
      .should("includes", "orangehrmlive.com")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      ) // method 3
      .and("contain", "orangehrm")
      .and("not.contain", "orangeyellowhrm");

    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    cy.get(".orangehrm-login-branding > img")
      .should("be.visible") // check logo is visible or not
      .and("exist"); // check logo exist or not

    cy.xpath("//a").should("have.length", "5"); // no of links

    cy.get("input[placeholder='Username']").type("Admin"); // provide a value into inputbox

    cy.get("input[placeholder='Username']").should("have.value", "Admin"); // value check
  });

  it("Explicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
  });
});
