describe("Login test", () => {
  it("login", () => {
    cy.visit("https://pstest.Avaniko.com");
    cy.get("#basic_userName").type("Manager");
    cy.get("#basic_password").type("Avan!12345");
    cy.get("button[type='submit']").click();

    cy.url()
      .should("includes", "pstest.Avaniko.com")
      .and("eq", "https://pstest.Avaniko.com");

    cy.xpath(
      "//button[@class='ant-btn ant-btn-text ant-btn-icon-only hp-float-right hp-text-color-dark-0']//*[name()='svg']"
    ).click();

    cy.get(
      ".ant-avatar.ant-avatar-circle.ant-avatar-image.hp-cursor-pointer"
    ).click();
  });
});
