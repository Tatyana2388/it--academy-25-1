import Base from "../base";
import {expect} from "@playwright/test";

class PageContent extends Base {
    constructor(page) {
        super();
        this.page = page;
    }

    get nextItem() {
        return ('.pagination-nav__link.pagination-nav__link--next');
    }

    get packageItem() {
        return ('#running-the-example-test');
    }

    async goToNextPage() {
        await this.page.locator(this.nextItem).scrollIntoViewIfNeeded();
        await this.page.locator(this.nextItem).isVisible();
        await this.page.locator(this.nextItem).click();
    }

    async goToPackage(text) {
        await expect(this.page.locator(this.packageItem).filter({hasText: text}).filter('h2')).toBeVisible();

    }
}

export {PageContent};