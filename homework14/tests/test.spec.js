import {test, expect} from '@playwright/test';
import {Navigation} from '../page-objects/components/navigation';
import {MainPage} from '../page-objects/mainPage';
import {PageContent} from '../page-objects/components/pageContent';
import {LeftMenu} from '../page-objects/components/leftMenu';

test.describe('Playwright test', async () => {
    test('API link', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToPageByName('API');
        console.log(await navigation.goToPageByName('API'));
    });

    test('Scroll to bottom', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        const pageContent = new PageContent(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToPageByName('API');
        await pageContent.goToNextPage();

    })
    test('Conference video', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        const leftMenu = new LeftMenu(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToPageByName('Community');
        await leftMenu.goToMenuByName('Conference Videos');
    })
    test('Go to Dropdown Link', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToPageByName('Node.js');
        await navigation.goToDropdownName('Python');
    })
    test('Search', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToSearch('Browsers');
    })
    test('Get yarn package', async ({page}) => {
        const navigation = new Navigation(page);
        const mainPage = new MainPage(page);
        const pageContent = new PageContent(page);
        await mainPage.navigate('https://playwright.dev/');
        await navigation.goToPageByName('Docs');
        await pageContent.goToPackage('Running the Example Test');

    })
});
