const Selector = require("../Selectors/Selectors");

class HomePage{

    /**
     * Verify total no. of products method
     * @param {number} value - Total Number of Products
     */
    async verifyNoOfProducts(value){
        await page.waitForSelector(Selector.allProducts, {visible: true});
        let productsList = await page.$$eval(Selector.allProducts, ele => { return ele.map(e => e.innerText)});
        expect(productsList.length).toBe(value);
    }

    /**
     * Open product details page method
     * @param {string} productName - Product Name
     */
    async openProductsDetails(productName){
        let productLink = await page.waitForXPath(Selector.productDetails(productName));
        await productLink.click();
    }

    /**
     * Open cart method
     */
    async clickOpenCartBtn(){
        let cartBtn = await page.waitForSelector(Selector.cartBtn);
        await cartBtn.click();
    }

    /**
     * Open menu method
     */
    async clickOpenMenuBtn(){
        let menuBtn = await page.waitForSelector(Selector.menuBtn);
        await menuBtn.click();
    }

    /**
     * Logout method
     */
    async clickLogoutBtn(){
        await page.waitForNetworkIdle({idleTime: 500});
        let logoutLink = await page.waitForSelector(Selector.logOut);
        await logoutLink.click();
    }
}
module.exports = HomePage;