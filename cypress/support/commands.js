/// <reference types="cypress" />
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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('logIn', () =>{
    // cy.fixture('example').then(function(testData){
    //     this.testData = testData
    //   })
    
    cy.get('#login2').click({force: true} );
    cy.get('#logInModal').should('be.visible')
    cy.wait(500)
    cy.get('#loginpassword').should('be.visible').type('4r4nd0mp4ssw0rd{enter}', { delay: 100 });
    
    cy.get('[for="log-pass"]').should('have.text','Password:')
    cy.get('#loginusername').should('be.visible').type('automatedUser26@example.com{enter}', { delay: 1 });
   
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})