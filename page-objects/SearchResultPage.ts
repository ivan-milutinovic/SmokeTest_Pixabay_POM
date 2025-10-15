import { Page, Locator } from "@playwright/test";

import { BasePage } from "./BasePage";

export class SearchResultPage extends BasePage {

    public readonly mainHeader: Locator;
    private readonly searchResult: Locator;

    constructor(page: Page) {
        super(page);

        this.mainHeader = page.locator("xpath=//div[contains(@id, 'app')]/div/div//h1[contains(@class, 'h1')]");
        this.searchResult = page.locator("xpath=//div[contains(@class, 'result')]//div[contains(@class, 'cell')]");
    }

    async getMainHeader(): Promise<string> {
        const text = await this.mainHeader.textContent();
        return text ?? '';
    }

    async getNumberOfResults(): Promise<number> {
        await this.searchResult.first().waitFor({ state: 'visible' });
        return this.searchResult.count();
    }

    async clickFirstImage(): Promise<void> {
        await this.searchResult.first().click();
    }
}