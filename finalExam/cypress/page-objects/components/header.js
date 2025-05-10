const Base = require('../Base');

class Header extends Base {
    constructor() {
        super();
    }

    get changeCityButton() {
        return cy.get('._left_15f9x_43')
    }
    get cityItem() {
        return cy.get('._citiesList_ev5nx_34 > :nth-child(5)',{timeout: 5000})
    }
    get closeCityModalButton() {
        return cy.get('.d-modal__close-button > .icon')
    }
    get cityName() {
        return cy.get('._message_16r5q_11')
    }
    get deliveryWithFittingLink(){
        return cy.get(':nth-child(1) > ._label_aroml_17 > ._title_1tuvk_44')
    }
    get titleDeliveryWithFittingLink() {
        return cy.get('._title_1k5bm_14')
    }
    getToChangeCity() {
        this.changeCityButton.click()
        this.cityItem.click()
        this.closeCityModalButton.click()

    }
}
    module.exports = new Header();
