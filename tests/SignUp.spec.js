const {test, expect} =require('@playwright/test');
test.only('First Playwright test',async({page})=>
{
    await page.goto("https://magento.softwaretestingboard.com/");

    //Locators:
    const signUpLink=page.getByText('Create an Account').first();
    const firstNameField=page.getByLabel('First Name');
    const lastNameField=page.getByLabel('Last Name');
    const emailField=page.getByLabel('Email', { exact: true });
    const passwordField=page.getByRole('textbox', { name: 'Password*', exact: true })
    const passwordConfField=page.getByLabel('Confirm Password');
    const submitBTN=page.getByRole('button', { name: 'Create an Account' });
    const successMSG=page.getByText('Thank you for registering')
    
    
    await signUpLink.click();
    await firstNameField.fill("Diaa");
    await lastNameField.fill("Elbighily");
    await emailField.fill("ayhaga6@gmail.com");
    await passwordField.fill("Qwerty@123456");
    await passwordConfField.fill("Qwerty@123456");
    await submitBTN.click();
    await expect(successMSG).toBeVisible();
});