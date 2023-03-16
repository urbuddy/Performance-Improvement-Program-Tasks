const Selector = require("../Selectors/Selectors");
class CartPage{
    
    /**
     * Verify product details in cart
     * @param {Object} productDetails - Product Details 
     * @param {string} productDetails.name - Product Name
     * @param {string} productDetails.price - Product Price
     * @param {string} productDetails.description - Product Description
     * @param {string} productDetails.quantity - Product Quantity
     */
    async verifyCartProductDetails(productDetails){
        await page.waitForXPath(Selector.productDetails(productDetails.name), {visible: true});
        expect(await page.$eval(Selector.cartProductName, ele => ele.innerText)).toBe(productDetails.name);
        expect(await page.$eval( Selector.cartPrice, ele => ele.innerText)).toBe(productDetails.price);
        expect(await page.$eval(Selector.cartDescription, ele => ele.innerText)).toContain(productDetails.description);
        expect(await page.$eval(Selector.cartQuantity, ele => ele.innerText)).toBe(productDetails.quantity);
    }

    /**
     * Open checkout form
     */
    async clickCheckoutProductBtn(){
        let checkoutBtn = await page.waitForSelector(Selector.checkoutBtn);
        await checkoutBtn.click();
    }
}
module.exports = CartPage;