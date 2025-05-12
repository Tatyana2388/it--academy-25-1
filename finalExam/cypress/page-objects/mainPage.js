const Base = require('./Base');

class MainPage extends Base {
    constructor() {
        super();
    }
        get acceptCookiesButton() {
            return cy.get('._buttonsWrapper_13q1n_20 > :nth-child(2)')
        }
        getAcceptCookies() {
            this.acceptCookiesButton.click()
        }

}
module.exports = new MainPage();