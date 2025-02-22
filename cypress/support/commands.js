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
// -- Sign up command
Cypress.Commands.add("signup", (firstName, lastName, email, password, confirmPassword) => {
cy.get("#firstname").type(firstName);
cy.get("#lastname").type(lastName);
cy.get("#email_address").type(email);
cy.get("#password").type(password);
cy.get("#password-confirmation").type(confirmPassword);
cy.get("button[title='Create an Account']").click();
});
  
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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })