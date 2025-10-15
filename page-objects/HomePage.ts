import { Page, Locator } from '@playwright/test';

import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    private readonly url: string = 'https://pixabay.com/';

    //lokatori
    private readonly mainHeader: Locator;
    private readonly searchInputField: Locator;
    private readonly loginLink: Locator;
    private readonly allNavLinks: Locator;

    public readonly backgroundImage: Locator;

    //konstruktor
    constructor(page: Page) {
        super(page);
        this.mainHeader = page.locator("xpath=//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/h1[1]");
        this.backgroundImage = page.locator("xpath = //html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/picture/img");
        this.searchInputField = page.locator(`//input[contains(@type, 'search')]`);
        this.loginLink = page.locator("xpath=//html[1]/body[1]/div[1]/div[1]/header[1]/div[1]/div[2]/div[2]/button[1]");
        this.allNavLinks = page.locator("xpath=//div[contains(@class, 'containerOuter')]/div/div/a");
    }

    //funkcije
    public async openPage(): Promise<void> {
        await this.page.goto(this.url, { waitUntil: 'load' });
        // await this.page.waitForTimeout(3000);
    }

    public async clickLoginButton(): Promise<void> {
        await this.loginLink.waitFor({ state: 'visible', timeout: 10000 });
        await this.loginLink.click();
    }

    public async clickNavLink(index: number): Promise<void> {
        await this.allNavLinks.nth(index).click();
    }

    public async search(query: string): Promise<void> {
        await this.searchInputField.fill(query);
        await this.searchInputField.press('Enter');
    }

    //funkcije za proveru
    public async getMainHeader(): Promise<string> {
        // await this.page.waitForTimeout(3000);
        const text = await this.mainHeader.textContent();
        return text ?? '';
    }

    public async getNubmerOfNavLinks(): Promise<number> {
        return this.allNavLinks.count();
    }

    public async getNavLinksText(): Promise<string[]> {
        return this.allNavLinks.allTextContents();
    }

    getUrl(): string {
        return this.page.url();
    }
    
}