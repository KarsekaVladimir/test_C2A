const phoneMenuItemSelector = '#cat'
const nameOfLoggedUser = '#nameofuser'
const cheapestPhone = ':nth-child(6) > .card > .card-block > h5'

class MainPage {

    get phoneMenuItem() {
        return cy.get(phoneMenuItemSelector).siblings()
            .eq(0)
    }

    clickOnPhoneMenu() {
        this.phoneMenuItem.click()
    }

    get nameOfLoggedUser() {
        return cy.get(nameOfLoggedUser)
    }

    checkNameOfLoggedUser() {
        this.nameOfLoggedUser.should('be.visible')
    }

    get cheapestPhone(){
        return cy.get(cheapestPhone)
    }

    clickOncheapestPhone(){
        this.cheapestPhone.click()
    }

}

export default new MainPage()