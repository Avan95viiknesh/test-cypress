describe("MyTestSuite", () => {
  it("DataDrivenTest", () => {
    cy.fixture("orangehrm2").then((datas) => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/"
      );

      datas.forEach((userdata) => {
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();

        if (userdata.username == "Admin" && userdata.password == "admin123") {
          cy.get(":nth-child(2) > .oxd-main-menu-item").should(
            "have.text",
            userdata.expected
          );
          cy.get('.oxd-userdropdown-tab > .oxd-icon').click();  // logout
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click();   // logout
        } else {
          cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should(
            "have.text",
            userdata.expected
          );
        }
      });
    });
  });
});
