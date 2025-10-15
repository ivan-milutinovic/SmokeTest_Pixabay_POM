import { Page, Locator } from "@playwright/test";

import { BasePage } from "./BasePage";

export class ImagePage extends BasePage {

    private readonly downloadButton: Locator;

    constructor(page: Page) {
        super(page);
        this.downloadButton = page.locator("//button[contains(@class, 'fullWidthTrigger')]");
    }

    async isDownloadButtonDisplayed(): Promise<boolean> {
        return this.downloadButton.isVisible();
    }
}