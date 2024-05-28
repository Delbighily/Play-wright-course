const {test, expect} =require('@playwright/test');
test('Test Cart checkout',async({page})=>
{test.slow();
await page.goto('https://magento.softwaretestingboard.com/');

//Locators
const SignInPageBTN=page.getByRole('link', { name: 'Sign In' });
const MailField=page.getByLabel('Email', { exact: true });
const Password=page.getByLabel('Password');
const SignInBTN=page.getByRole('button', { name: 'Sign In' });
const MenTab=page.getByRole('link', { name: 'Men', exact: true });
const Category=page.getByRole('link', { name: 'Jackets' });
const SelectedItem=page.getByRole('link', { name: 'Typhon Performance Fleece-' }).first();
const ColorSelector=page.getByLabel('Green');
const SizeSelector=page.getByLabel('M', { exact: true });
const SetQuantity=page.getByRole('spinbutton', { name: 'Qty' });
const AddToCartBTN=page.getByRole('button', { name: 'Add to Cart' });
const MyCartBTN=page.getByRole('link', { name: ' My Cart' });
const SuccessPurchaseMessage=page.locator('.message-success.success.message');
const ProceedToCheckoutBTN=page.getByRole('button', { name: 'Proceed to Checkout' });
const CountrySelector=page.getByLabel('Country');
const BuildingNumberField=page.getByLabel('Street Address: Line 1');
const StreetNameField=page.getByLabel('Street Address: Line 2');
const AreaName=page.getByLabel('Street Address: Line 3');
const CityField=page.getByLabel('City');
const PostalCodeField=page.getByLabel('Zip/Postal Code');
const PhoneNumberField=page.getByLabel('Phone Number');
const NextBTN=page.getByRole('button', { name: 'Next' });
const PlaceOrderBTN=page.getByRole('button', { name: 'Place Order' });
const RadioBTN=page.locator('.radio')
const NewAddress=page.getByRole('button', { name: '+New Address' });
const CheckoutSuccessMSG=page.locator('.checkout-success')


//Interactions
await SignInPageBTN.click();
await MailField.fill('ayhaga14@gmail.com');
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
await ProceedToCheckoutBTN.click();
await page.waitForLoadState('networkidle')
if(await NewAddress.isVisible()){
    await NextBTN.click();
    await PlaceOrderBTN.click();
    await expect(CheckoutSuccessMSG).toBeVisible();
}
else {
    await CountrySelector.selectOption('EG');
    await BuildingNumberField.fill('16');
    await StreetNameField.fill('wazeer st');
    await AreaName.pressSequentially('ard elgamal',{delay:500});
    await CityField.fill('Damietta');
    await PostalCodeField.fill('123456');
    await PhoneNumberField.fill('01090661988');
    await expect(RadioBTN).toBeChecked({timeout:100000});
    await NextBTN.click();
    await PlaceOrderBTN.click();
    await expect(CheckoutSuccessMSG).toBeVisible();
}
}
);
