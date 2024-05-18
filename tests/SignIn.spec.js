const {test, expect} =require('@playwright/test');
test('Test sign in',async({page})=>
{
await page.goto('https://magento.softwaretestingboard.com/');

//Locators
const SignInPageBTN=page.getByRole('link', { name: 'Sign In' });
const MailField=page.getByLabel('Email', { exact: true });
const Password=page.getByLabel('Password');
const SignInBTN=page.getByRole('button', { name: 'Sign In' });
const SuccessMSG=page.getByRole('banner').getByText('Welcome, Diaa Elbighily!');

//Interactions
await SignInPageBTN.click();
await MailField.fill('ayhaga6@gmail.com');
await Password.fill('Qwerty@123456');
await SignInBTN.click();

//Assertions
await expect(SuccessMSG).toBeVisible();
});