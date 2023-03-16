const Selector = require("../Selectors/Selectors");

class SignInPage {

    /**
     * Click on Sign Up Button
     */
    async clickSignUpBtn(){
        let registerLink = await page.waitForXPath(Selector.link("Register Now!"));
        await registerLink.click();
        await page.waitForNetworkIdle({idleTime: 100});
    }

    /**
     * Sign In Form
     * @param {Object} userDetails 
     */
    async fillSignInForm(userDetails){
        await page.waitForNetworkIdle({idleTime: 100});
        await page.waitForSelector(Selector.inputField("username"));
        await page.type(Selector.inputField("username"), userDetails.userName);
        await page.click(Selector.inputField("password"), {clickCount: 3});
        await page.type(Selector.inputField("password"), userDetails.password);
        let formSubmitLink = await page.waitForSelector(Selector.inputField("signon"), {visible: true});
        await formSubmitLink.click();
        await page.waitForNetworkIdle({idleTime: 100});
        expect(await page.$eval(Selector.welcomeMsg, ele => ele.innerText)).toContain("Welcome "+userDetails.firstName+"!");
    }
}
module.exports = SignInPage;