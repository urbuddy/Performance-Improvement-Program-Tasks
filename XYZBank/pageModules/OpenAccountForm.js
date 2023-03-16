const Selector = require("../Selectors/Selectors");
class OpenAccountForm {

    /**
     * Open New Account Form
     * @param {Object} account - Account Details 
     * @param {string} account.firstName - First Name of Customer
     * @param {string} account.currency - Currency of Bank Account
     * @param {string} account.responseText - Response Text after created Account
     * @returns {string} - Account Number
     */
    async fillOpenNewAccountForm(account){
        await page.waitForSelector(Selector.accountSelect);
        await page.waitForXPath(Selector.selectOption(account.firstName));
        let selectorValueOfCustomer = await page.evaluate(element => {
            return element.getAttribute('value');
        }, (await page.$x(Selector.selectOption(account.firstName)))[0]);
        await page.select(Selector.accountSelect, selectorValueOfCustomer);
        await page.select(Selector.currencySelect, account.currency);
        let confirmedText;
        await page.on('dialog', async dialog => { 
            confirmedText = dialog.message();
        });
        let submitBtn = await page.waitForXPath(Selector.formButton("Process"));
        await submitBtn.click();
        expect(confirmedText).toContain(account.responseText);
        return confirmedText.substring(confirmedText.length - 4);
    }
}
module.exports = OpenAccountForm;