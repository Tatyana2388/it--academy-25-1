const Base = require('../Base');

class Menu extends Base{
    constructor(){
        super();
    }
    get elementsItem() {
        return cy.get(':nth-child(1) > :nth-child(1) > .card-up');
    }
    get formsItem(){
        return cy.get(':nth-child(2) > :nth-child(1) > .card-up')
    }
    get textboxItem() {
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text');
    }
    get webTablesItem() {
       return  cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text')
    }
    get practiceItem() {
    return cy.get(':nth-child(2) > .element-list > .menu-list > #item-0')
    }
    get submitButton() {
        return cy.get('#submit')
    }
    get nameField() {
        return cy.get('#userName-label')
    }
    get emailField() {
        return cy.get('#userEmail-label')
    }
    get addressCurrentField() {
        return cy.get('#currentAddress-label')
    }
    get addressPermanentField() {
        return cy.get('#permanentAddress-label')
    }
    get nameFilled() {
        return cy.get('#name')
    }
    get emailFilled() {
        return cy.get('#email')
    }
    get addressCurrentFilled() {
        return cy.get('.border > #currentAddress')
    }
    get addressPermanentFilled() {
        return cy.get('.border > #permanentAddress')
    }
    get nameTextField() {
        return cy.get('#userName')
    }
    get emailTextField() {
        return cy.get('#userEmail')
    }
    get addressCurrentTextField() {
        return cy.get('#currentAddress')
    }
    get addressPermanentTextField() {
        return cy.get('#permanentAddress')
    }
    get tablesTitle() {
    return cy.get('.text-center')
    }
    get searchBox() {
        return cy.get('#searchBox')
    }
    get lineWithName() {
        return cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)')
    }
    get addButton() {
        return cy.get('#addNewRecordButton')
    }
    get closeButton() {
        return cy.get('.close > [aria-hidden="true"]')
    }
    get radioButton() {
        return cy.get('#genterWrapper > .col-md-9 > :nth-child(2)')
    }
    get dropdown() {
      return cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer')
    }
    get dropdownFilled() {
        return cy.get('.css-1hwfws3')
    }
getToMenuContentText() {
        this.elementsItem.click()
        this.textboxItem.click()
}
getToMenuContentWeb() {
        this.elementsItem.click()
        this.webTablesItem.click()
}

getFilledForm(name, email, addressCurrent, addressPermanent  ){
        this.nameTextField.type(name)
        this.emailTextField.type(email)
        this.addressCurrentTextField.type(addressCurrent)
        this.addressPermanentTextField.type(addressPermanent)
        this.submitButton.click()
}
getSearchByFirstName(name){
        this.searchBox.type(name)

}
getRegistrationModal(){
        this.addButton.click()
}
getToMenuContentPractice() {
        this.formsItem.click()
        this.practiceItem.click()
    }

  }
module.exports = new Menu();