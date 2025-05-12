const Base = require('../Base');

class TopMenu extends Base{
    constructor(){
        super();
    }
    get signInButton(){
        return cy.get('._root_hqrm4_2 > .x-button')
    }
    get typeTextField(){
        return cy.get('.input-material__input-wrapper:nth-child(2)')
    }
    get enterButton(){
        return cy.get('._footer_1f2eg_15')
    }
    get messageValidEmail() {
        return cy.get('.input-material__validation-message')
    }
    get signInModal(){
        return cy.get('.d-modal__header')
    }
    get menItem() {
        return cy.get('[href="/men-home/?sitelink=topmenuM"]')
    }
    get topMenuWomenClothesItem() {
        return cy.get('[href="/c/355/clothes-zhenskaya-odezhda/?sitelink=topmenuW&l=2"]')
    }
    get topMenuMenClothesItem() {
        return cy.get('[href="/c/477/clothes-muzhskaya-odezhda/?sitelink=topmenuM&l=2"]')
    }
    get openDropdown() {
        return cy.get(':nth-child(1) > .v-popper > .v-popper-target > ._item_xwbaf_2 > ._content_xwbaf_16 > ._icon_xwbaf_70 > .icon')
    }
    get radioButton() {
        return cy.get('._root_1tvz1_2 ._root_qf238_2:nth-child(2)')
    }
    get topMenuLink(){
        return cy.get('[href="/c/4308/default-krasotawoman/?sitelink=topmenuW&l=8"]')
    }
    get topMenuTittle() {
        return cy.get('._titleText_1s7by_15')
    }
    get goodsItem() {
        return cy.get('#MP002XM097ZM > .x-product-card__link > ._root_aroml_2 > :nth-child(1) > ._content_1j42c_2 > ._root_552z7_2 > ._area_552z7_8')
    }
    get sizeItem() {
        return cy.get(':nth-child(1) > .v-popper > .v-popper-target > ._root_sez4k_2')
    }
    get selectSizeItem() {
         return cy.get('.ui-product-page-sizes-chooser._items_1d79y_6:first-child().ui-product-page-sizes-choose-item')
    }
    get addToBasketButton() {
        return cy.get('.recaptcha > .x-button')
    }
    get modalBasket() {
        return cy.get('.d-modal__header')
    }
    get continueShoppingButton() {
        return cy.get('.d-modal__bottom > .x-button_secondaryFilledWeb7184')
    }
    get goToBasketModalButton() {
        return cy.get('.d-modal__bottom > .x-button_primaryFilledWeb7184')
    }
    get placeAnOrderModalButton() {
        return cy.get('._buttonBackground_810e2_6 > .x-button')
    }
    get pickupPointButton() {
        return cy.get('.ui-checkout-map__tab-pickup')
    }
    get pointButton() {
        return cy.get('[style="transform: translateY(0px) translateX(0px);"] > :nth-child(1) > ._root_1ncca_2')
    }
    get pickupPlace() {
        return cy.get('._submit_cgsao_44 > .x-button')
    }
    get customerName() {
        return cy.get('#first_name')
    }
    get customerPhone() {
        return cy.get('#phone')
    }
    get message() {
        return cy.get('.input-material__validation-message')
    }
    get placeAnOrderButtonPoint() {
        return cy.get('.x-button')
    }
    get closeModalButton() {
        return cy.get('.d-modal__close-button > .icon')
    }
    get basketButton() {
        return cy.get('._root_x4h89_2._root_aroml_2._secondaryLabel_aroml_13')
    }
    get deleteGoodsButton() {
        return cy.get('.x-button.x-button_borderlessPrimary.x-button_24._root_unp9l_15')
    }
    get deleteConfirmButton() {
        return cy.get('.x-button.x-button_primaryFilledWeb7184.x-button_32.x-button_intrinsic-width._actionButton_4stt4_7')
    }
    get tittleBasket() {
        return cy.get('._title_i0cp7_9')
    }
    get placeAnOrderButton() {
        return cy.get('.x-button.x-button_primaryPremium.x-button_52._button_810e2_6')
    }
    get deliveryModal() {
        return cy.get('._title_1uylr_18')
    }
    get searchButton() {
        return cy.get('._root_mh0i8_2 > .x-button')
    }
    get tittleSearchButton() {
        return cy.get('._titleText_1s7by_15')
    }
    get titleSearchIncorrect() {
        return cy.get('._title_1m10r_24')
    }
     get categoryItem() {
        return cy.get('[href="https://www.lamoda.by/c/1393/shoes-premium-men-krossovki-i-kedi/"]')
     }
     get titleCategory() {
        return cy.get('._titleText_1s7by_15')
     }
     get filterItem() {
        return cy.get('#RTLAEI293201 > .x-product-card__link > .x-product-card-description > ._customTags_fofh3_16 > ._tag_d2m9d_2')
    }
    getToAddToBasket(){
        this.menItem.click()
        this.topMenuMenClothesItem.click()
        this.goodsItem.click()
        this.sizeItem.click()
        this.addToBasketButton.click()
    }
    getToDeleteFromBasket(){
        this.basketButton.click()
        this.deleteGoodsButton.click()
        this.deleteConfirmButton.click()
    }
    getToApplyFilter() {
        this.topMenuWomenClothesItem.click()
        this.openDropdown.click()
        this.radioButton.click();
    }
 }

module.exports = new TopMenu();