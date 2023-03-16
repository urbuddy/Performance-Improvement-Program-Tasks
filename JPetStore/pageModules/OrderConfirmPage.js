const Selector = require("../Selectors/Selectors");
class OrderConfirmPage{

    /**
     * Verify Billing and Shipping Details
     * @param {Object} billingDetails - Billing Details
     * @param {string} billingDetails.firstName - Customer First Name 
     * @param {string} billingDetails.lastName - Customer Last Name 
     * @param {string} billingDetails.address1 - Customer Home Address
     * @param {string} billingDetails.address2 - Customer City Area Address
     * @param {string} billingDetails.city - Customer City Name 
     * @param {string} billingDetails.state - Customer State Name 
     * @param {string} billingDetails.zipCode - Customer Postal Code 
     * @param {string} billingDetails.country - Customer Country Name 
     * 
     * @param {Object} shippingDetails - Shipping Details
     * @param {string} shippingDetails.firstName - Customer First Name 
     * @param {string} shippingDetails.lastName - Customer Last Name 
     * @param {string} shippingDetails.address1 - Customer Home Address
     * @param {string} shippingDetails.address2 - Customer City Area Address
     * @param {string} shippingDetails.city - Customer City Name 
     * @param {string} shippingDetails.state - Customer State Name 
     * @param {string} shippingDetails.zipCode - Customer Postal Code 
     * @param {string} shippingDetails.country - Customer Country Name 
     */
    async verifyBillingAndShippingDetails(billingDetails ,shippingDetails){
        await page.waitForXPath(Selector.tableCellValue(billingDetails.firstName), {visible: true});
        let verifyFirstName = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(billingDetails.firstName)))[0]);
        expect(verifyFirstName).toBe(billingDetails.firstName);
        let verifyLastName = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(billingDetails.lastName)))[0]);
        expect(verifyLastName).toBe(billingDetails.lastName);
        let verifyAddress1 = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(billingDetails.address1)))[0]);
        expect(verifyAddress1).toBe(billingDetails.address1);
        let verifyAddress2 = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(billingDetails.address2)))[0]);
        expect(verifyAddress2).toBe(billingDetails.address2);
        let verifyCity = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(billingDetails.city)))[0]);
        expect(verifyCity).toBe(billingDetails.city);
        let verifyState = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(billingDetails.state)))[0]);
        expect(verifyState).toBe(billingDetails.state);
        let verifyZipCode = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(billingDetails.zipCode)))[0]);
        expect(verifyZipCode).toBe(billingDetails.zipCode);
        let verifyCountry = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(billingDetails.country)))[0]);
        expect(verifyCountry).toBe(billingDetails.country); 
        if(billingDetails.shippingAddressRequired){
            await page.waitForXPath(Selector.tableCellValue(shippingDetails.firstName), {visible: true});
            let verifyShippingFirstName = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.tableCellValue(shippingDetails.firstName)))[0]);
            expect(verifyShippingFirstName).toBe(shippingDetails.firstName);
            let verifyShippingLastName = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.tableCellValue(shippingDetails.lastName)))[0]);
            expect(verifyShippingLastName).toBe(shippingDetails.lastName);
            let verifyShippingAddress1 = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.tableCellValue(shippingDetails.address1)))[0]);
            expect(verifyShippingAddress1).toBe(shippingDetails.address1);
            let verifyShippingAddress2 = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.tableCellValue(shippingDetails.address2)))[0]);
            expect(verifyShippingAddress2).toBe(shippingDetails.address2);
            let verifyShippingCity = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.tableCellValue(shippingDetails.city)))[0]);
            expect(verifyShippingCity).toBe(shippingDetails.city);
            let verifyShippingState = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.tableCellValue(shippingDetails.state)))[0]);
            expect(verifyShippingState).toBe(shippingDetails.state);
            let verifyShippingZipCode = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.tableCellValue(shippingDetails.zipCode)))[0]);
            expect(verifyShippingZipCode).toBe(shippingDetails.zipCode);
            let verifyShippingCountry = await page.evaluate(element => {
                return element.textContent;
            }, (await page.$x(Selector.tableCellValue(shippingDetails.country)))[0]);
            expect(verifyShippingCountry).toBe(shippingDetails.country);
        }
    }

    /**
     * Click on Order Confirm Button
     */
    async clickOrderConfirmBtn(){
        let confirmBtn = await page.waitForXPath(Selector.link("Confirm"), {visible:true});
        await confirmBtn.click();
    }
}
module.exports = OrderConfirmPage;