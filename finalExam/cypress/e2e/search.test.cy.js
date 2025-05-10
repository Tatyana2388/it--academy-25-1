const topMenu = require('../page-objects/components/topMenu');
const mainPage = require("../page-objects/mainPage");

describe('Lamoda search test', () => {
    beforeEach(() => {
        mainPage.navigate('https://www.lamoda.by/')
        mainPage.getAcceptCookies()
    })

    it('should search by entered value', () => {
        topMenu.searchButton.click().type('Mango').click()
        topMenu.tittleSearchButton.should('contain.text', 'Mango')
    })

    it('should be displayed a message about unsuccessful search after entering symbols', () => {
        topMenu.searchButton.click().type('?_+').click()
        topMenu.titleSearchIncorrect.should('contain.text', 'Ничего не нашли по запросу')
    })
})