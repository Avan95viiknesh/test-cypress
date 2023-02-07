
//cypress by default capture the screenshot whenever the  failures are happened (have to run test in command prompt or by using any ci tool) but if you want to capture screenshot intiontionally you can write command cy.screenshot() 

describe("MySuite", () => {

    it("Capture screenshot & videos", () => {
       cy.visit("https://demo.opencart.com/");
    //    cy.screenshot("homePage");
    //    cy.wait(5000);
    //   cy.get("img[title='Your Store']").screenshot("Logo");

       // Automatically capture screenshot & video on failure - only when  we execute through  terminal or  CLI tools 
   
       cy.get("li:nth-child(7) a:nth-child(1)").click();
       cy.get("div[id='content'] h2").should("have.text", "Tablets");

    })
})