const Selector = require("../Selectors/Selectors");
const AccountPage = require("./AccountPage");
const accountPage = new AccountPage();
class AmountWithdrawForm{

    /**
     * Withdraw Amount Form
     * @param {Object} withdrawalAmountDetails - Withdrawal Amount Details
     * @param {string} withdrawalAmountDetails.amount - Amount to Withdraw  
     * @param {string} withdrawalAmountDetails.responseText - Response Text after Withdraw the Amount
     * @param {number} withdrawalAmountDetails.beforeTansactionAcBalance - Account Balance before the Transaction
     */
    async fillWithdrawAmountForm(withdrawalAmountDetails){
        await page.waitForNetworkIdle({idleTime: 100});
        await page.waitForSelector(Selector.inputField("amount"));
        await page.type(Selector.inputField("amount"), withdrawalAmountDetails.amount);
        let submitBtn = await page.waitForSelector(Selector.submitButton);
        await submitBtn.click();
        await page.waitForXPath(Selector.spanText(withdrawalAmountDetails.responseText), {visible: true});
        let confirmedText = await page.$eval(Selector.responseText, ele => ele.innerText);
        expect(confirmedText).toBe(withdrawalAmountDetails.responseText);
        let currentBalance = await accountPage.getAccountBalance();
        await page.waitForNetworkIdle({idleTime: 100});
        expect(currentBalance).toBe(withdrawalAmountDetails.beforeTansactionAcBalance - Number(withdrawalAmountDetails.amount));
    }
}
module.exports = AmountWithdrawForm;