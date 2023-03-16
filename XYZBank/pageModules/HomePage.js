const Selector = require("../Selectors/Selectors");
class HomePage{

    /**
     * Open Home Page URL
     */
    async openHomePage(){
        await page.goto(Selector.homePageURL, {waitUntil: "domcontentloaded"});
    }

    /**
     * Click on Manager Login Button 
     */
    async clickManagerLoginBtn(){
        let managerLoginBtn = await page.waitForSelector(Selector.button("manager"));
        await managerLoginBtn.click();
    }

    /**
     * Click on Custome Login Button
     */
    async clickCustomerLoginBtn(){
        let customerLoginBtn = await page.waitForSelector(Selector.button("customer"));
        await customerLoginBtn.click();
    }

    /**
     * Click on Main Home Page Button
     */
    async clickMainHomePageBtn(){
        let homeBtn = await page.waitForSelector(Selector.button("home"));
        await homeBtn.click();
    }
}
module.exports = HomePage;