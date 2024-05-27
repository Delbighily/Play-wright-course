const {test, expect} =require('@playwright/test');
test('Test purchase',async({page})=>
{
await page.goto('https://magento.softwaretestingboard.com/');

//Locators
const SignInPageBTN=page.getByRole('link', { name: 'Sign In' });
const MailField=page.getByLabel('Email', { exact: true });
const Password=page.getByLabel('Password');
const SignInBTN=page.getByRole('button', { name: 'Sign In' });
const SuccessMSG=page.getByRole('banner').getByText('Welcome, Diaa Elbighily!');
const MenTab=page.getByRole('link', { name: 'Men', exact: true });
const TopsTab=page.getByRole('menuitem', { name: ' Tops' });
const Category=page.getByRole('link', { name: 'Jackets' });
const SelectedItem=page.getByRole('link', { name: 'Typhon Performance Fleece-' }).first();
const ColorSelector=page.getByLabel('Green');
const SizeSelector=page.getByLabel('M', { exact: true });
const SetQuantity=page.getByRole('spinbutton', { name: 'Qty' });
const AddToCartBTN=page.getByRole('button', { name: 'Add to Cart' });
const MyCartBTN=page.getByRole('link', { name: ' My Cart' });
const RemoveItemsBTN=page.getByRole('link', { name: ' Remove' });
const AlertOkBTN=page.getByRole('button', { name: 'OK' });
const SuccessPurchaseMessage=page.locator('.message-success.success.message');
const ClearCartMSG=page.locator('.subtitle.empty');

//Interactions
await SignInPageBTN.click();
await MailField.fill('ayhaga6@gmail.com');
await Password.fill('Qwerty@123456');
await SignInBTN.click();
await MenTab.click();
await Category.click();
await SelectedItem.click();
await ColorSelector.click();
await SizeSelector.click();
await SetQuantity.click();
await SetQuantity.fill('4');
await AddToCartBTN.click();
await expect(SuccessPurchaseMessage).toBeVisible();
await expect(SuccessPurchaseMessage).toContainText('You added Typhon Performance Fleece-lined Jacket to your shopping cart.')
await page.waitForLoadState('networkidle')
await MyCartBTN.click();
await RemoveItemsBTN.click();
await AlertOkBTN.click();
await expect(ClearCartMSG).toHaveText('You have no items in your shopping cart.')
});