const menu = require('../page-objects/components/menu');

describe('DEMOQA test', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/')
    })
    it('should get to practice form page', () => {
        menu.getToMenuContentPractice()
    })

    it('should check radio button', () => {
        menu.getToMenuContentPractice()
        menu.radioButton.click()
    })

    it('should be displayed selected dropdown option', () => {
        menu.getToMenuContentPractice()
        menu.dropdown.click()
        cy.contains('Haryana').click()
        menu.dropdownFilled.should('contain.text','Haryana')
    })

})

