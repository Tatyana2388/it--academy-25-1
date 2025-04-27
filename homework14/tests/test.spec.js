import {test, expect} from '@playwright/test';
import {Navigation} from '../page-objects/components/navigation';
import {MainPage} from '../page-objects/mainPage';
import {PageContent} from '../page-objects/components/pageContent';
import {LeftMenu} from '../page-objects/components/leftMenu';

test.describe('Playwright test', async () => {
    test('should get to the API link', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToPageByName('API');
        await expect(page.getByRole('heading', {name: 'Playwright Library'})).toBeVisible();
    });

    test('should scroll to the bottom and click on the next page', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        const pageContent = new PageContent(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToPageByName('API');
        await pageContent.goToNextPage();
        await expect(page.getByRole('heading', {name: 'APIRequest'})).toBeVisible();

    })
    test('should get to the menu Conference video', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        const leftMenu = new LeftMenu(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToPageByName('Community');
        await leftMenu.goToMenuByName('Conference Videos');
        await expect(page.getByRole('heading', {name: 'Conference Videos'})).toBeVisible();
    })
    test('should get to the python page', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToPageByName('Node.js');
        await navigation.goToDropdownName('Python');
        await expect(page).toHaveURL('https://playwright.dev/python/');
    })

    test('should be displayed search value ', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToSearch('Browsers');
        await expect(page.locator('.DocSearch-Modal #docsearch-list .DocSearch-Hit-title', { hasText: 'Mock browser APIs'})).toBeVisible();
    })

    test('should get to yarn package', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        const pageContent = new PageContent(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToPageByName('Docs');
        const sectionHeader = await pageContent.getSectionHeader('HTML Test Reports');
        const tabsContainer = await pageContent.getTabsContainer(sectionHeader);
        await pageContent.clickTabsItem(tabsContainer, 'yarn');
        await expect(tabsContainer.locator('.codeBlockLines_e6Vv', { hasText: 'yarn playwright show-report'})).toBeVisible();
    })

});
