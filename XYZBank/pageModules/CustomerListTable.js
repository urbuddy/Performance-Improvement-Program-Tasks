const Selector = require("../Selectors/Selectors");
class CustomerListTable{

    /**
     * Verify Customer Details
     * @param {Object} customerDetails 
     */
    async verifyCustomerDetails(customerDetails){
        await page.waitForXPath(Selector.tableCellValue(customerDetails.firstName));
        let verifyfname = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(customerDetails.firstName)))[0]);
        expect(verifyfname).toBe(customerDetails.firstName);
        let verifylname = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(customerDetails.lastName)))[0]);
        expect(verifylname).toBe(customerDetails.lastName);
        let verifypostcode = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(customerDetails.postCode)))[0]);
        expect(verifypostcode).toBe(customerDetails.postCode);
        let verifyAcNo = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(customerDetails.AcNo)))[0]);
        expect(verifyAcNo).toContain(customerDetails.AcNo);
    }

    /**
     * Click on Delete Customer Account Button Method
     * @param {string} firstName 
     */
    async clickDeleteCustomerAccountBtn(firstName){
        let deleteCustomerAccountBtn = await page.waitForXPath(Selector.accountDeleteBtn(firstName), {visible: true});
        await deleteCustomerAccountBtn.click();
    }
}
module.exports = CustomerListTable;