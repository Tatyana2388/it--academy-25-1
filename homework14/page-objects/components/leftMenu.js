import Base from "../base";

class LeftMenu extends Base {
    constructor(page) {
        super();
        this.page = page;
    }
    async getMenuByName (menuName) {
        return `//*[contains(@class,"menu__link") and contains(text(),"${menuName}")]`
    }
    async goToMenuByName(menuName) {
        await this.page.locator(await this.getMenuByName(menuName)).click();
    }

}
    export { LeftMenu };