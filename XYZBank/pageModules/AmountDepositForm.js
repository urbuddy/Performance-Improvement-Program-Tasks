const Selector = require("../Selectors/Selectors");
const AccountPage = require("./AccountPage");
const accountPage = new AccountPage();
class AmountDepositForm{

    /**
     * Deposit Amount Form
     * @param {Object} depositAmountDetails - Deposite Amount Details
     * @param {string} depositAmountDetails.amount - Amount to Deposite  
     * @param {string} depositAmountDetails.responseText - Response Text after Deposite the Amount
     * @param {number} depositAmountDetails.beforeTansactionAcBalance - Account Balance before the Transaction
     */
    async fillDepositAmountForm(depositAmountDetails){
        await page.waitForSelector(Selector.inputField("amount"));
        await page.type(Selector.inputField("amount"), depositAmountDetails.amount);
        let submitBtn = await page.waitForSelector(Selector.submitButton);
        await submitBtn.click();
        await page.waitForXPath(Selector.spanText(depositAmountDetails.responseText), {visible: true});
        let confirmedText = await page.$eval(Selector.responseText, ele => ele.innerText);
        expect(confirmedText).toBe(depositAmountDetails.responseText);
        let currentBalance = await accountPage.getAccountBalance();
        expect(currentBalance).toBe(depositAmountDetails.beforeTansactionAcBalance + Number(depositAmountDetails.amount));
    }
}
module.exports = AmountDepositForm;