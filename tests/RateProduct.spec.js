const {test, expect} =require('@playwright/test');
test('Test rate product',async({page})=>
{
await page.goto('https://magento.softwaretestingboard.com/');

//Locators
const SignInPageBTN=page.getByRole('link', { name: 'Sign In' });
const MailField=page.getByLabel('Email', { exact: true });
const Password=page.getByLabel('Password');
const SignInBTN=page.getByRole('button', { name: 'Sign In' });
const MenTab=page.getByRole('link', { name: 'Men', exact: true });
const Category=page.getByRole('link', { name: 'Jackets' });
const SelectedItem=page.getByRole('link', { name: 'Typhon Performance Fleece-' }).first();
const ReviewTab=page.locator('#tab-label-reviews-title');
const NickName=page.getByLabel('Nickname');
const StarRate=page.getByTitle("4 stars");
const SummaryField=page.getByLabel('Summary');
const ReviewField=page.getByLabel('Review', { exact: true });
const SubmitBTN=page.getByLabel('Reviews').locator('button');
const AlertMessage=page.getByRole('alert').locator('div').first();


//Interactions
await SignInPageBTN.click();
await MailField.fill('ayhaga6@gmail.com');
await Password.fill('Qwerty@123456');
await SignInBTN.click();
await MenTab.click();
await Category.click();
await SelectedItem.click();
await ReviewTab.click();
await page.waitForLoadState('networkidle');
await StarRate.evaluate(e => e.click());
await NickName.clear();
await NickName.fill("Diaa Mohamed")
await SummaryField.fill("Good jacket over all");
await ReviewField.fill("Great value for the money Strongly recommend it");
await SubmitBTN.click();
await page.waitForLoadState('networkidle');
await expect(AlertMessage).toBeVisible();
await expect(AlertMessage).toContainText('You submitted your review for')
})