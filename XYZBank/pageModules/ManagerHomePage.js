const Selector = require("../Selectors/Selectors");
class ManagerHomePage{

    /**
     * Click on Add Customer Button
     */
    async clickAddCustomersBtn(){
        let addCustomerBtn = await page.waitForSelector(Selector.button("addCust"));
        await addCustomerBtn.click();
    }

    /**
     * Click on Open New Account Button
     */
    async clickOpenAccountBtn(){
        let openAccountBtn = await page.waitForSelector(Selector.button("openAccount"));
        await openAccountBtn.click();
    }

    /**
     * Click on Show Customer Button
     */
    async clickShowCustomersBtn(){
        let customersInfoBtn = await page.waitForSelector(Selector.button("showCust"));
        await customersInfoBtn.click();
    }
}
module.exports = ManagerHomePage;