// click on link using label
// overwriting existing cotains() command  //  contains method is case sensitive  so overwrite the existing cotains() command
// re-usable custom command

describe("Custom Commands", () => {
  it("handling links", () => {
    cy.visit("https://demo.nopcommerce.com/");

    // direct approach without using custom command
    // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();

    // using custom command
    cy.clickLink("Apple MacBook Pro 13-inch"); // using label instead of locator
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });

  it("overwriting existing commands", () => {
    cy.visit("https://demo.nopcommerce.com/");
    // using custom command
    cy.clickLink("APPLE MACBOOK PRO 13-inch"); // using label instead of locator
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });

  it.only("Login commands", () => {
    cy.visit("https://demo.nopcommerce.com/");
    //login
    cy.clickLink("Log in"); // custom command
    cy.wait(3000);
    cy.loginapp("testing@gmail.com", "test123");
    cy.get(".ico-account").should("have.text", "My account");
  });
});
