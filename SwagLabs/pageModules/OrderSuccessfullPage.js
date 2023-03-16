const Selector = require("../Selectors/Selectors");
class OrderSuccessfullPage{

    /**
     * Verify product ordered
     * @param {Object} result 
     */
    async verifyProductOrdered(result){
        await page.waitForSelector(Selector.titleText);
        expect(await page.$eval(Selector.titleText, ele => ele.innerText)).toBe(result.processCompleteText);
        await page.waitForSelector(Selector.greetingText);
        expect(await page.$eval(Selector.greetingText, ele => ele.innerText)).toBe(result.greetingText);
        expect(await page.$eval(Selector.responseText, ele => ele.innerText)).toContain(result.message);
    }

    /**
     * Click on back to home button
     */
    async clickBackToHomeBtn(){
        let HomeBtn = await page.waitForSelector(Selector.backToHome);
        await HomeBtn.click();
    }
}
module.exports = OrderSuccessfullPage;