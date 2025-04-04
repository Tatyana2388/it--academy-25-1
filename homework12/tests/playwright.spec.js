import {test, expect} from '@playwright/test';


test.describe('Playwright test', async () => {
    test('API link', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await page.getByRole('link', {name: 'API'}).click();
        await expect(page.getByRole('heading', {name: 'Playwright Library'})).toBeVisible();
        // await page.waitForTimeout(30000);
    });
    test('Scroll to bottom', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await page.getByRole('link', { name: 'API' }).click();
        await page.getByRole('heading', {name: 'APIRequest'}).isVisible();
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.locator('.pagination-nav__link.pagination-nav__link--next').click();
        await expect(page.getByRole('heading', {name: 'APIRequest'})).toBeVisible();
    });
    test('Conference video', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await page.getByRole('link', {name: 'Community'}).click();
        await page.getByRole('heading', {name: 'Welcome'}).isVisible();
        await page.locator("//a[contains(text(),'Conference Videos')]").click();
        await expect(page.getByRole('heading', {name: 'Conference Videos'})).toBeVisible();
        // await page.waitForTimeout(30000);
    })
});

