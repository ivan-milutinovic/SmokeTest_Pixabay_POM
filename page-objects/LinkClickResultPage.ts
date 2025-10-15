import { Page, Locator } from "@playwright/test";

import { BasePage } from "./BasePage";

export class LinkClickResultPage extends BasePage {
    
    private readonly mainHeader: Locator;

    constructor(page: Page) {
        super(page);
        
        this.mainHeader = page.locator("xpath=//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/h1[1]");
    }

    async getMainHeader(): Promise<string> {
        const text = await this.mainHeader.textContent();
        return text ?? '';
    }

    getUrl(): string {
        return this.page.url();
    }

    async backToPreviousPage(): Promise<void> {
        await this.page.goBack();
    }
}