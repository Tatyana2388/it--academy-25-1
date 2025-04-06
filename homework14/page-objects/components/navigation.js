import Base from "../base";

class Navigation extends Base{
    constructor(page) {
        super();
        this.page = page;
    }
    get searchButton() {
        return (`.DocSearch-Button-Placeholder`);
    }
    get searchField() {
        return (`.DocSearch-Input`);

    }
    async getNavByName (itemName) {
        return `//*[contains(@class,"navbar__link") and contains(text(),"${itemName}")]`
    }
    async getDropdownByName (dropName){
        return `//*[contains(@class,"dropdown__link") and contains(text(),"${dropName}")]`
    }

    async goToPageByName(itemName) {
        await this.page.locator(await this.getNavByName(itemName)).click();
    }
    async goToDropdownName(dropName) {
        await this.page.locator(await this.getDropdownByName(dropName)).isVisible();
        await this.page.locator(await this.getDropdownByName(dropName)).click();
    }
    async goToSearch(searchValue) {
        await this.page.locator(this.searchButton).isVisible();
        await this.page.locator(this.searchButton).click();
        await this.page.locator(this.searchField).isVisible();
        await this.page.locator(this.searchField).fill('');
        await this.page.locator(this.searchField).isVisible();
    }
}
    export { Navigation };
