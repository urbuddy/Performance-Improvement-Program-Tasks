const Selector = require("../Selectors/Selectors");
class CartPage{

    /**
     * Verify Cart Product Details
     * @param {Object} productDetails 
     */
    async verifyCartProduct(productDetails){
        await page.waitForXPath(Selector.link(productDetails.itemId), {visible: true});
        let verifyitemId = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.link(productDetails.itemId)))[0]);
        expect(verifyitemId).toBe(productDetails.itemId);
        let verifyProductId = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(productDetails.petID)))[0]);
        expect(verifyProductId).toBe(productDetails.petID);
        let verifyTotalPrice = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(productDetails.price)))[0]);
        expect(verifyTotalPrice).toBe(productDetails.price);
    }

    /**
     * Click on Checkout Button
     */
    async clickProductCheckoutBtn(){
        let checkoutBtn = await page.waitForXPath(Selector.link("Proceed to Checkout"), {visible:true});
        await checkoutBtn.click();
    }
}
module.exports = CartPage;