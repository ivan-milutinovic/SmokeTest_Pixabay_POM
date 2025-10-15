import { Page, Locator } from "@playwright/test";

import { BasePage } from "./BasePage";
;

export class LoginPage extends BasePage {

    private readonly usernameInputField: Locator;
    private readonly passwordInputField: Locator;
    private readonly loginSubmitButton: Locator;

    constructor(page: Page) {
        super(page);

        this.usernameInputField = page.locator("xpath=//input[@name='login_user']");
        this.passwordInputField = page.locator("xpath=//input[@name='login_pass']");
        this.loginSubmitButton = page.locator("xpath=//div/button[@type='submit']");
    }

    async verifyFormFieldsAreDisplayed(): Promise<boolean> {
    const isUsernameVisible = await this.usernameInputField.isVisible();
    const isPasswordVisible = await this.passwordInputField.isVisible();
    const isLoginButtonVisible = await this.loginSubmitButton.isVisible();

    return isUsernameVisible && isPasswordVisible && isLoginButtonVisible;
    }
}