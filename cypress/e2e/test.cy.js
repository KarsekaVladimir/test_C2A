/// <reference types="cypress" />

import MainPage from '../page-objects/mainPage'; 

describe('test suit /www.demoblaze.com/', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('userData').then(function(testData){
            this.testData = testData
          })
        cy.logIn()
    });

    it('select phone', () => {

        MainPage.checkNameOfLoggedUser();
        MainPage.clickOnPhoneMenu();
        MainPage.clickOncheapestPhone()

        cy.visit('/cart.html')//Unfortunatelly did not have enough time for 2nd PO creation
        cy.get('.success').should('exist')
        
    })
})