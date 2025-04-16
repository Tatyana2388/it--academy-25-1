import * as be from "ansi-colors";
const menu = require('../page-objects/components/menu');

describe('DEMOQA test', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/')
    })

    it('should be displayed Submit button on the user Form', () => {
       menu.getToMenuContentText()
       menu.submitButton.should('be.visible');
    })

    it('should have correct fields names', () => {
        menu.getToMenuContentText()
        menu.nameField.should('contain.text', 'Full Name'  )
        menu.emailField.should('contain.text', 'Email'   )
        menu.addressCurrentField.should('contain.text', 'Current Address'   )
        menu.addressPermanentField.should('contain.text', 'Permanent Address'   )
    })

    it('should be displayed the right data after filling the form', () => {
     menu.getToMenuContentText()
     menu.getFilledForm('Ivan Ivanov','test@example.com','str. Lenina, 28, Mogilev','str. Lenina, 30, Minsk')
     menu.nameFilled.should('contain.text', 'Ivan Ivanov' )
     menu.emailFilled.should('contain.text', 'test@example.com' )
     menu.addressCurrentFilled.should('contain.text', 'str. Lenina, 28, Mogilev' )
     menu.addressPermanentFilled.should('contain.text', 'str. Lenina, 30, Minsk' )
    })

    it('should be highlighted in red email field with invalid email ',() => {
        menu.getToMenuContentText()
        menu.getFilledForm('Ivan Ivanov','!-#','str. Lenina, 28, Mogilev','str. Lenina, 30, Minsk')
        menu.emailFilled.should('have.class', 'field-error')
     })
});
