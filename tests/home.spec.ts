import { test, expect } from './baseTest';

test.describe('Home Page Tests', () => {

    test.beforeEach( async ({ homePage }) => {
        await homePage.openPage();
    });

    test('Verify page Main Header is present', async ({ homePage }) => {
        const expectedMainHeaderText = 'Stunning royalty-free images & royalty-free stock';
        const actualMainHeaderText = await homePage.getMainHeader();

        expect(actualMainHeaderText).toBe(expectedMainHeaderText);
    });

    test('Verify background image is visible', async ({ homePage }) => {
        await expect(homePage.backgroundImage).toBeVisible();
    });

})