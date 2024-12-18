const { test, expect} = require("@playwright/test");
const appUrl = "http://localhost:3000";
test('Verify All Books link is visible', async ({ page }) => {

    await page.goto(appUrl);
    
    await page.waitForSelector('nav.navbar');

    const allBooksLing = await page.$('a[href="/catalog"]');

    const isElementVisible = await allBooksLing.isVisible();

    expect(isElementVisible).toBe(true);
});

test('Verify Login link is visible', async ({ page }) => {

    await page.goto(appUrl);
    
    await page.waitForSelector('nav.navbar');

    const loginLink = await page.$('a[href="/login"]');

    const isElementVisible = await loginLink.isVisible();

    expect(isElementVisible).toBe(true);
});

test('Verify Register link is visible', async ({ page }) => {

    await page.goto(appUrl);
    
    await page.waitForSelector('nav.navbar');

    const registerLink = await page.$('a[href="/register"]');

    const isElementVisible = await registerLink.isVisible();

    expect(isElementVisible).toBe(true);
});

test('Verify Register link text', async ({ page }) => {

    await page.goto(appUrl);
    
    await page.waitForSelector('nav.navbar');

    const registerLink = await page.$('a[href="/register"]');

    const isElementVisible = await registerLink.textContent();

    expect(isElementVisible).toEqual("Register");
});