import { test, expect } from './baseTest';

test.describe('Image Download Tests', () => {

    const query = 'Forest';

    test('Verify download button is present', async ({ homePage, searchResultPage, imagePage }) => {

        await homePage.openPage();
        await homePage.search(query);

        await searchResultPage.clickFirstImage();

        const isDisplayed = await imagePage.isDownloadButtonDisplayed();
        expect(isDisplayed).toBe(true);

    });

});