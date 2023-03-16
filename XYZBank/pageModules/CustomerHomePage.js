const Selector = require("../Selectors/Selectors");
class CustomerHomePage {

    /**
     * Login Account Form
     * @param {string} firstName - First Name of Customer
     */
    async fillLoginAccountForm(firstName){
        await page.waitForSelector(Selector.accountSelect);
        await page.waitForXPath(Selector.selectOption(firstName));
        let selectorValueOfCustomer = await page.evaluate(element => {
            return element.getAttribute('value');
        }, (await page.$x(Selector.selectOption(firstName)))[0]);
        await page.select(Selector.accountSelect, selectorValueOfCustomer);
        let loginBtn = await page.waitForXPath(Selector.formButton("Login"));
        await loginBtn.click();
    }
}
module.exports = CustomerHomePage;