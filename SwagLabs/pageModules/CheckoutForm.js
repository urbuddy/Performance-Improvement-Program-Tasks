const Selector = require("../Selectors/Selectors");

class CheckoutForm{
    /**
     * Fill checkout form
     * @param {Object} details 
     */
    async fillCheckoutForm(details){
        await page.waitForSelector(Selector.firstName);
        await page.type(Selector.firstName, details.firstName);
        await page.type(Selector.lastName, details.lastName);
        await page.type(Selector.postalCode, details.postCode);
    }

    /**
     * Submit checkout form 
     */
    async clickContinueBtn(){
        let continueBtn = await page.waitForSelector(Selector.continueBtn);
        await continueBtn.click();
    }
}
module.exports = CheckoutForm;