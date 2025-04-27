const menu = require('../page-objects/components/menu');

describe('DEMOQA test', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/')
    })
    it('should have correct Title ', () => {
        menu.getToMenuContentWeb()
        menu.tablesTitle.should('contain.text','Web Tables')
    })

    it('should search user by first name', () => {
        menu.getToMenuContentWeb()
        menu.getSearchByFirstName('Cierra')
        menu.lineWithName.should('contain.text','Cierra')
    })

    it('should be closed the modal after clicking the close button', () => {
        menu.getToMenuContentWeb()
        menu.getRegistrationModal()
        menu.closeButton.click()
    })

});