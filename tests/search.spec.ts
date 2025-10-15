import { test, expect } from './baseTest';

test.describe('Search Tests', () => {

    test('Verify successful searh result', async ({ homePage, searchResultPage, page }) => {
        const query = 'Forest';

        await homePage.openPage();
        await homePage.search(query);

        //provera naslova
        // const header = await searchResultPage.getMainHeader();
        // expect(header.toLowerCase()).toContain(query.toLowerCase());

        //provera rezultata
        const resultCount = await searchResultPage.getNumberOfResults();
        expect(resultCount).toBeGreaterThan(0);
        
        //provera url
        expect(searchResultPage.getUrl()).toContain(query.toLowerCase());

    });

});