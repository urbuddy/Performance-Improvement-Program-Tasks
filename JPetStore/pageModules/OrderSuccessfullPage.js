const Selector = require("../Selectors/Selectors");
class OrderSuccessfullPage {

    /**
     * Verify Pet Ordered
     * @param {string} text - Order Confirmed Text
     */
    async verifyPetOrdered(text){
        await page.waitForSelector(Selector.responseText);
        expect(await page.$eval(Selector.responseText, ele => ele.innerText)).toBe(text);
    }

    /**
     * Verify Price and Card Details 
     * @param {Object} details - Price and Cart Details 
     * @param {string} details.cardType - Credit Card Name
     * @param {string} details.creditCard - Credit Card Number
     * @param {string} details.expiryDate - Credit Card Expiry Date
     * @param {string} details.totalPrice - Total Charges
     */
    async verifyPriceAndCardDetails(details){
        await page.waitForXPath(Selector.tableCellValue(details.cardType), {visible: true});
        let verifycardType = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(details.cardType)))[0]);
        expect(verifycardType).toBe(details.cardType);
        let verifyCardNo = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.textContain(details.creditCard)))[0]);
        expect(verifyCardNo).toContain(details.creditCard);
        let verifyCardExpiryDate = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(details.expiryDate)))[0]);
        expect(verifyCardExpiryDate).toBe(details.expiryDate);
        let verifyTotalPrice = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(details.totalPrice)))[0]);
        expect(verifyTotalPrice).toBe(details.totalPrice);
    }
}
module.exports = OrderSuccessfullPage;