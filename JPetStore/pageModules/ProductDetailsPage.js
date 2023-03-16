const Selector = require("../Selectors/Selectors");
class ProductDetailsPage {

    /**
     * Verify Product details
     * @param {Object} productDetails 
     */
    async verifyProductDetails(productDetails){
        await page.waitForXPath(Selector.boldItemId(productDetails.itemId), {visible:true});
        let verifyitemId = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.boldItemId(productDetails.itemId)))[0]);
        expect(verifyitemId).toBe(" "+productDetails.itemId+" ");
        let verifyPrice = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(productDetails.price)))[0]);
        expect(verifyPrice).toBe(productDetails.price);
        let verifytype = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(productDetails.species)))[0]);
        expect(verifytype).toBe(productDetails.species);
    }

    /**
     * Click on Add to Cart Product Button
     */
    async clickAddToCartProductBtn(){
        let addtoCartBtn = await page.waitForXPath(Selector.link("Add to Cart"), {visible:true});
        await addtoCartBtn.click();
    }
}
module.exports = ProductDetailsPage;