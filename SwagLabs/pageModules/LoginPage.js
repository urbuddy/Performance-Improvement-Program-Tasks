const Selector = require("../Selectors/Selectors");

class LoginPage{
    /**
     * Open home page by using URL
     */
    async openHomePageURL(){
        await page.goto(Selector.homePageURL, {waitUntil: "domcontentloaded"});
    }

    /**
     * Fill login form 
     * @param {Object} userDetails 
     * @param {string} text 
     */
    async fillLoginForm(userDetails, text){
        await page.waitForSelector(Selector.userName);
        await page.click(Selector.userName, {clickCount: 3});
        await page.type(Selector.userName, userDetails.userName);
        await page.click(Selector.password, {clickCount: 3});
        await page.type(Selector.password, userDetails.password);
        let loginBtn = await page.waitForSelector(Selector.loginBtn);
        await loginBtn.click();
        if ((await page.$x(Selector.errorText(text))) !== null) {
            expect(await page.$x(Selector.errorText(text))).not.toBeNull();
        }
    }
}
module.exports = LoginPage;