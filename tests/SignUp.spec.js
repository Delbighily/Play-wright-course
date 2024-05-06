const {test} =require('@playwright/test');
test.only('First Playwright test',async({page})=>
{
    await page.goto("https://magento.softwaretestingboard.com/");

    //Locators:
    const signUpLink=page.getByText('Create an Account').first();
    const firstNameField=page.locator('#firstname');
    const lastNameField=page.locator('#lastname');
    const emailField=page.locator('#email_address');
    const passwordField=page.locator('#password');
    const passwordConfField=page.locator('#password-confirmation');
    const submitBTN=page.locator('button.action.primary')
    
    
    
    await signUpLink.click();
    await firstNameField.fill("Diaa");
    await lastNameField.fill("Elbighily");
    await emailField.fill("ayhaga1@gmail.com");
    await passwordField.fill("Qwerty@123456");
    await passwordConfField.fill("Qwerty@123456");
    await submitBTN.click();
});