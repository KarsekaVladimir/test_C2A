/// <reference types="cypress" />

import MainPage from '../page-objects/mainPage'; 

describe('test suit', () => {
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

        // cy.get(':nth-child(6) > .card > .card-block > h5').click()
        cy.visit('/cart.html')
        cy.get('.success').should('exist')
        
    })
})