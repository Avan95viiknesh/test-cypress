describe("Handle dropdown", () => {
  //handling select tag dropdown
  it("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country")
      .select("Italy")
      .should("have.value", "Italy");
  });

  //handling bootstrap dropdown without select tag
  it("Dropdown without select tag", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type("india").type("{enter}");
    //here type is not case sensitive
    cy.get("#select2-billing_country-container").should("have.text", "India");
  });

  //handling auto suggested dropdown

  it("Auto suggest static dropdown", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("Delhi");
    cy.get(".suggestion-title").contains("Delhi University").click();
  });

  //handling dynamic auto suggestion dropdown
  it("Dynamic dropdown", () => {
    cy.visit("https://www.google.com/");
    cy.get("input[name='q']").type("cypress automation");
    cy.wait(2000);
    cy.get("div.wM6W7d>span").should("have.length", 11);
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      //iterate over an array of DOM elements - jQuery function
      if ($el.text() == "cypress automation tool")
        //contaians method also works each function is an alternative way
        cy.wrap($el).click();
    });
    cy.get("input[name='q']").should("have.value", "cypress automation tool");
  });
});
