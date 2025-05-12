const mainPage = require('../page-objects/mainPage');
const topMenu = require('../page-objects/components/topMenu');

describe('Lamoda basket test', () => {
    beforeEach(() => {
        mainPage.navigate('https://www.lamoda.by/')
        mainPage.getAcceptCookies()
    })

    it('should add goods to the basket', () => {
        topMenu.getToAddToBasket()
        topMenu.modalBasket.should('contain.text', 'Товар добавлен в корзину')
    })

    it('should delete goods from the basket', () => {
        topMenu.getToAddToBasket()
        topMenu.closeModalButton.click()
        topMenu.getToDeleteFromBasket()
        topMenu.tittleBasket.should('contain.text', 'Корзина пока пустая')
    })

    it('should be working the place an order button', () => {
        topMenu.getToAddToBasket()
        topMenu.closeModalButton.click()
        topMenu.basketButton.click()
        topMenu.placeAnOrderButton.click()
        topMenu.deliveryModal.should('contain.text', 'Способ доставки')
    })

    it('should be displayed validation message if phone number is not filled', () => {
        topMenu.getToAddToBasket()
        topMenu.goToBasketModalButton.click()
        topMenu.placeAnOrderModalButton.click()
        topMenu.pickupPointButton.click()
        topMenu.pointButton.click()
        topMenu.pickupPlace.click()
        topMenu.customerName.type('Татьяна')
        topMenu.placeAnOrderButtonPoint.click()
        topMenu.message.should('contain.text', 'Введите номер телефона.')
    })

    it('should be working the continue shopping button', () => {
        topMenu.getToAddToBasket()
        topMenu.continueShoppingButton.click()
        topMenu.menItem.should('be.visible')
    })

})