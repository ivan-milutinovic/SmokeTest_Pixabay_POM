import { test as baseTest } from '@playwright/test';

import { HomePage } from '../page-objects/HomePage';
import { LoginPage } from '../page-objects/LoginPage';
import { SearchResultPage } from '../page-objects/SearchResultPage';
import { ImagePage } from '../page-objects/ImagePage';
import { LinkClickResultPage } from '../page-objects/LinkClickResultPage';

type fixtures = {
    homePage: HomePage;
    loginPage: LoginPage;
    searchResultPage: SearchResultPage;
    imagePage: ImagePage;
    linkClickResultPage: LinkClickResultPage;
};

export const test = baseTest.extend<fixtures>({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    searchResultPage: async ({ page}, use) => {
        await use(new SearchResultPage(page));
    },
    imagePage: async ({ page }, use) => {
        await use(new ImagePage(page));
    },
    linkClickResultPage: async ({ page }, use) => {
        await use(new LinkClickResultPage(page));
    } 

});

export { expect } from '@playwright/test';