const Selector = require("../Selectors/Selectors");
class ProductDetailsPage{

    /**
     * Verify product details
     * @param {Object} productDetails 
     */
    async verifyProductDetails(productDetails){
        await page.waitForSelector(Selector.product, {visible: true});
        expect(await page.$eval(Selector.product, ele => ele.innerText)).toBe(productDetails.name);
        expect(await page.$eval(Selector.price, ele => ele.innerText)).toBe(productDetails.price);
        await page.waitForXPath(Selector.productDetails(productDetails.description), {visible: true});
        let logistic = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.productDetails(productDetails.description)))[0]);
        expect(logistic).toBe(productDetails.description);
    }

    /**
     * Verify product details for problem user
     * @param {string} productName 
     */
    async verifyProductDetailsForProblemUser(productName){
        await page.waitForSelector(Selector.product, {visible: true});
        expect(await page.$eval(Selector.product, ele => ele.innerText)).not.toBe(productName);
    }

    /**
     * Click on add to cart button
    */
    async clickAddToCartProductBtn(){
        let addToCartBtn = await page.waitForXPath(Selector.button("Add to cart"), {visible: true});
        await addToCartBtn.click();
        await page.waitForXPath(Selector.button("Remove"), {visible:true});
    }
}
module.exports = ProductDetailsPage;
