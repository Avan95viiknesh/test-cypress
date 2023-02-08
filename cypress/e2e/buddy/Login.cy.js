describe("Login test", () => {
  it("login", () => {
    cy.visit("https://pstest.Avaniko.com");
    cy.get("#basic_userName").type("Manager");
    cy.get("#basic_password").type("Avan!12345");

    cy.get(".hp-mb-24").should("be.visible");
    cy.wait(3000);
    cy.get(
      ".hp-mb-sm-0.hp-text-color-primary-1.hp-text-color-dark-0.hp-text-center"
    ).should("have.text", "Budy Professional Services");

    cy.wait(5000);

    cy.get("svg").click();
    cy.get("button[type='submit']").click();

    // cy.url()
    //   .should("includes", "pstest.Avaniko.com")
    //   .and("eq", "https://pstest.Avaniko.com");

    // cy.xpath(
    //   "//button[@class='ant-btn ant-btn-text ant-btn-icon-only hp-float-right hp-text-color-dark-0']//*[name()='svg']"
    // ).click();

    // cy.get(
    //   ".ant-avatar.ant-avatar-circle.ant-avatar-image.hp-cursor-pointer"
    // ).click();


    cy.get("#basic_search").type("hhh")
  });
});
