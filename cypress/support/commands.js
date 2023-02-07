// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('get', (originalFn, url, options) => { ... })
 

/// <refence types = "Cypress" />
/// <refence types = "cypress-xpath" />

// instead of repeating same command use like this import here and get it from where you want
Cypress.Commands.add("getIframe", (iframe) => {
  return cy
    .get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});

//custom command for clicking on link using label
Cypress.Commands.add("clickLink", (label) => {
  cy.get("a").contains(label).click();
});

// over write contains()
// contains method by default 5 perameters

// Cypress.Commands.overwrite("contains",(originalFn, subject, filter, text, options = {}) => {
//     // determine if a filter argument was passed

//     if (typeof text === "object") {
//       options = text
//       text = filter
//       filter = undefined
//     }

//     options.matchCase = false   // by default matchcase is true

//     return originalFn(options, subject, filter, text);
//   });



  // custom command for login

  Cypress.Commands.add("loginapp",(email, password) => {
    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get("button[class='button-1 login-button']").click();
  })