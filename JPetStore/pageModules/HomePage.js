const Selector = require("../Selectors/Selectors");
class HomePage {

    /**
     * Open Home Page URL
     */
    async openHomePageURL(){
        await page.goto(Selector.homePageURL, {waitUntil: "domcontentloaded"});
    }

    /**
     * Click on Sign Button
     */
    async clickSignInBtn(){
        await page.waitForNetworkIdle({idleTime: 100});
        let signInLink = await page.waitForXPath(Selector.link("Sign In"), {visible: true});
        await signInLink.click();
    }

    /**
     * Click on My Account Button
     */
    async clickMyAccountBtn(){
        let myAccountLink = await page.waitForXPath( Selector.link("My Account"), {visible: true});
        await myAccountLink.click();
    }

    /**
     * Search Product
     * @param {string} value - Search Product Name
     */
    async searchProduct(value){
        await page.waitForSelector(Selector.inputField("keyword"), {visible: true});
        await page.type(Selector.inputField("keyword"), value);
        await page.click(Selector.inputField("searchProducts"));
    }

    /**
     * Click on open Home Page Link
     */
    async openHomePageLink(){
        let homeBtn = await page.waitForSelector(Selector.homePageLink)
        await homeBtn.click();
    }

    /**
     * Verify Total Number of Categories of Animals
     * @param {number} productLength - Total Number of Categories of Animals
     */
    async verifyTotalCategiriesOfPet(productLength){
        await page.waitForSelector(Selector.sidebarElements);
        let noOfCategoryOfPet = await page.$$(Selector.sidebarElements);
        expect(noOfCategoryOfPet.length).toBe(productLength);
    }

    /**
     * Click on Category Link
     * @param {string} category - Pet Category Name
     */
    async clickPetCategorySelection(category){
        let petSelection = await page.waitForSelector(Selector.petCategoryLink(category), {visible:true});
        await petSelection.click();
    }

    /**
     * Click on Logout Button
     */
    async clickLogOutBtn(){
        let signOutLink = await page.waitForXPath(Selector.link("Sign Out"), {visible: true});
        await signOutLink.click();
    }
}
module.exports = HomePage;