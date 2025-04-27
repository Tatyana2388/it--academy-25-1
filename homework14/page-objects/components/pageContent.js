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
        return ('h2.anchorWithStickyNavbar_LWe7');
    }

    async goToNextPage() {
        await this.page.locator(this.nextItem).scrollIntoViewIfNeeded();
        await this.page.locator(this.nextItem).isVisible();
        await this.page.locator(this.nextItem).click();
    }

    async getSectionHeader(text) {
        return this.page.locator(this.packageItem).filter({hasText: text});
    }

    async getTabsContainer(section) {
        return await section.locator('+ p + .tabs-container');
    }

    async clickTabsItem(tabs, tabText) {
        return await tabs.locator('.tabs li.tabItem_LNqP').filter({hasText: tabText}).click();
    }

}

export {PageContent};