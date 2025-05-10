const Base = require('../Base');

class Footer extends Base {
    constructor() {
        super();
    }

    get deliveryLink() {
        return cy.get('[href="/delivery/?from=footer"]', {timeout: 5000})
    }
    get titleDeliveryLink(){
        return cy.get('._title_1k5bm_14')
    }
}

    module.exports = new Footer();