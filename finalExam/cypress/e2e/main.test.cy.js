const mainPage = require('../page-objects/mainPage');
const topMenu = require('../page-objects/components/topMenu');
const footer = require('../page-objects/components/footer');
const header = require('../page-objects/components/header');

describe('Lamoda main page test', () => {
    beforeEach(() => {
        mainPage.navigate('https://www.lamoda.by/')
        mainPage.getAcceptCookies()
    })

    it('should be working top links', () => {
        topMenu.topMenuLink.click()
        topMenu.topMenuTittle.should('contain.text','Средства для красоты')
    })

    it('should change selected city', () => {
        header.getToChangeCity()
        header.cityName.should('contain.text', 'г. Брест')
    })

    it('should be working the sign in button', () => {
        topMenu.signInButton.click()
        topMenu.signInModal.should('contain.text', 'Добро пожаловать в Lamoda')
    })

    it('should be displayed validation message with invalid email', () => {
        topMenu.signInButton.click()
        topMenu.typeTextField.click().type('&jhgjhg')
        topMenu.enterButton.click()
        topMenu.messageValidEmail.should('contain.text', 'Пожалуйста, проверьте, правильно ли указан адрес')
    })

    it('should be working links in the footer', () => {
        footer.deliveryLink.click()
        footer.titleDeliveryLink.should('contain.text', 'Доставка товаров Lamoda')
    })

    it('should be displayed items with applied filter', () => {
        topMenu.getToApplyFilter()
        topMenu.filterItem.should('contain.text', 'новая коллекция')
    })

    it('should be opened the category from the main page', () => {
        topMenu.menItem.click()
        topMenu.categoryItem.click()
        topMenu.titleCategory.should ('contain.text', 'Мужские кроссовки и кеды премиум класса')
    })

    it('should de working deliver yWith Fitting Link',() => {
        header.deliveryWithFittingLink.click()
        header.titleDeliveryWithFittingLink.should('contain.text', 'Доставка товаров Lamoda')
    })

})