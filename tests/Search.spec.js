const {test, expect} =require('@playwright/test');
test('Test search',async({page})=>
{
await page.goto('https://magento.softwaretestingboard.com/');

//Locators
const SignInPageBTN=page.getByRole('link', { name: 'Sign In' });
const MailField=page.getByLabel('Email', { exact: true });
const Password=page.getByLabel('Password');
const SignInBTN=page.getByRole('button', { name: 'Sign In' });
const SuccessMSG=page.getByRole('banner').getByText('Welcome, Diaa Elbighily!');
const SearchField=page.getByPlaceholder('Search entire store here...');
const SearchButton=page.locator('[title="Search"]');
const SelectedItem=page.getByRole('link', { name: 'Didi Sport Watch' }).first();
const AddWishListBTN=page.getByRole('link', { name: ' Add to Wish List' })
const ItemText=page.locator('.product-item-link').first();
const SuccessMsg=page.locator('.message-success.success.message')

//Interactions
await SignInPageBTN.click();
await MailField.fill('ayhaga6@gmail.com');
await Password.fill('Qwerty@123456');
await SignInBTN.click();
await SearchField.pressSequentially('watch',{delay:500});
await SearchButton.click();
await expect(ItemText).toContainText('Watch');
await SelectedItem.click();
await AddWishListBTN.click();
await expect(SuccessMSG).toBeVisible();

});