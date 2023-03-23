const Selector = require("../Selectors/Selectors");
class TransactionPage{

    /**
     * Verify Transactions
     * @param {Object} transactionDetails - Transaction Details
     * @param {string} transactionDetails.firstTransactionAmount - Transaction Amount of First Transaction
     * @param {string} transactionDetails.firstTransactionStatus - Transaction Status of first Transaction
     * @param {string} transactionDetails.secondTransactionAmount - Transaction Amount of Second Transaction
     * @param {string} transactionDetails.secondTransactionStatus - Transaction Status of Second Transaction
     */
    async verifyTransactions(transactionDetails){
        await page.waitForNetworkIdle({idleTime: 100});
        await page.waitForSelector(Selector.transactionList);
        let transactions = await page.$$(Selector.transactionList);
        expect(transactions.length).toBe(2);
        let transactionAmout = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(transactionDetails.firstTransactionAmount)))[0]);
        expect(transactionAmout).toBe(transactionDetails.firstTransactionAmount);
        let typeOfTransactions = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.transactionStatus(transactionDetails.firstTransactionStatus)))[0]);
        expect(typeOfTransactions).toBe(transactionDetails.firstTransactionStatus);

        transactionAmout = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(transactionDetails.secondTransactionAmount)))[0]);
        expect(transactionAmout).toBe(transactionDetails.secondTransactionAmount);
        typeOfTransactions = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.transactionStatus(transactionDetails.secondTransactionStatus)))[0]);
        expect(typeOfTransactions).toBe(transactionDetails.secondTransactionStatus);
    }
}
module.exports = TransactionPage;