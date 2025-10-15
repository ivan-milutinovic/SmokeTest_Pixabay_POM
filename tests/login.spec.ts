import { test, expect } from './baseTest';

test.describe('Login Tests', () => {

    test('Verify login fields exist', async ({ homePage, loginPage }) => {

        await homePage.openPage();
        await homePage.clickLoginButton();


        //provera prisutnosti
        const isDisplayed = await loginPage.verifyFormFieldsAreDisplayed();
        expect(isDisplayed).toBe(true);
    })

});