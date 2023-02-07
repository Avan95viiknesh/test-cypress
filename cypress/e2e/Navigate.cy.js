// go for navigate

describe("mysuite", () => {
  it("NavigationTest", () => {
    cy.visit("https://demo.opencart.com/");
    cy.title().should("eq", "Your Store"); // home page

    cy.get("li:nth-child(7) a:nth-child(1)").click();
    cy.get("div[id='content'] h2").should("have.text", "Cameras"); // camera

    cy.go("back"); // go back to home page
    cy.title().should("eq", "Your Store");

    cy.go("forward"); // go forward (cameras page)
    cy.get("div[id='content'] h2").should("have.text", "Cameras"); // camera page

    cy.go(-1); // home page
    cy.title().should("eq", "Your Store");

    cy.go(1); //go forward (cameras page)
    cy.get("div[id='content'] h2").should("have.text", "Cameras"); 

    cy.reload(); // reload the page

  });
});
