const Selector = require("../Selectors/Selectors");
class AccountPage{

    /**
     * Verify Account Details
     * @param {Object} customerDetails - Customer Details
     * @param {string} customerDetails.firstName - Customer First Name
     * @param {string} customerDetails.lastName - Customer Last Name
     * @param {string} customerDetails.AcNo - Customer Account Number
     * @param {string} customerDetails.currency - Currency of Bank Account
     */
    async verifyAccountDetails(customerDetails){
        await page.waitForSelector(Selector.accountHeader);
        expect(await page.$eval(Selector.accountHeader, ele => ele.innerText)).toBe(customerDetails.firstName+" "+customerDetails.lastName);
        await page.waitForXPath(Selector.detailsVerification(customerDetails.AcNo));
        let verifyAcNo = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.detailsVerification(customerDetails.AcNo)))[0]);
        expect(verifyAcNo).toContain(customerDetails.AcNo);
        let currency = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.detailsVerification(customerDetails.currency)))[0]);
        expect(currency).toContain(customerDetails.currency);
    }

    /**
     * Get Account Balance Method
     * @returns {number} - Account Balance
     */
    async getAccountBalance(){
        await page.waitForXPath(Selector.balance);
        let temp = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.balance))[0]);
        return Number(temp);
    }

    /**
     * Click on Deposite Amount Button
     */
    async clickDepositAmountBtn(){
        let depositBtn = await page.waitForSelector(Selector.button("deposit"));
        await depositBtn.click();
    }

    /**
     * Click on Withdraw Amount Button
     */
    async clickWithdrawAmountBtn(){
        await page.waitForNetworkIdle({idleTime: 100});
        let withdrawalBtn = await page.waitForSelector(Selector.button("withdrawl"));
        await withdrawalBtn.click();
    }

    /**
     * Click on Show Transaction Button
     */
    async clickShowTransactionBtn(){
        await page.waitForNetworkIdle({idleTime: 100});
        let transactionPage = await page.waitForSelector(Selector.button("transactions"));
        await transactionPage.click({ delay: 500 });
    }
}
module.exports = AccountPage;