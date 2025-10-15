import { test, expect } from './baseTest';

test.describe('Navigation Links Tests', () => {
    
    test('Verify navigation links are  and working', async ({ homePage, linkClickResultPage }) => {

        await homePage.openPage();

        const epxectedLinksCount = 24;
        const allLinkTexts = await homePage.getNavLinksText();
        const actualLinksCount = await homePage.getNubmerOfNavLinks();

        //provera rezultata
        expect(actualLinksCount).toBe(epxectedLinksCount);

        const numberOfLinksToTest = actualLinksCount < 4 ? actualLinksCount : 4;

        for ( let i = 1; i < numberOfLinksToTest; i++) {
            const linkText = allLinkTexts[i].toLowerCase();

            await test.step(`Klik na link: ${linkText}`, async () => {
                await homePage.clickNavLink(i);

                //provera naslova
                // const header = await linkClickResultPage.getMainHeader();
                // expect(header.toLowerCase()).toContain(linkText.toLowerCase());

                //provera url
                const newUrl = linkClickResultPage.getUrl();
                expect(newUrl).toContain(linkText);

                await linkClickResultPage.backToPreviousPage();
            });
        }
    });
});