const Selector = require("../Selectors/Selectors");
class ShippingDetailsForm {

    /**
     * Shipping Details Form 
     * @param {Object} shippingDetails - Shipping Details
     * @param {string} shippingDetails.firstName - Customer First Name 
     * @param {string} shippingDetails.lastName - Customer Last Name 
     * @param {string} shippingDetails.address1 - Customer Home Address
     * @param {string} shippingDetails.address2 - Customer City Area Address
     * @param {string} shippingDetails.city - Customer City Name 
     * @param {string} shippingDetails.state - Customer State Name 
     * @param {string} shippingDetails.zipCode - Customer Postal Code 
     * @param {string} shippingDetails.country - Customer Country Name 
     */
    async fillShippingDetailsForm(shippingDetails){
        await page.waitForNetworkIdle({idleTime: 100});
        await page.waitForSelector(Selector.inputField("order.shipToFirstName"));
        await page.click(Selector.inputField("order.shipToFirstName"), {clickCount: 3});
        await page.type(Selector.inputField("order.shipToFirstName"), shippingDetails.firstName);
        await page.click(Selector.inputField("order.shipToLastName"), {clickCount: 3});
        await page.type(Selector.inputField("order.shipToLastName"), shippingDetails.lastName);
        await page.click(Selector.inputField("order.shipAddress1"), {clickCount: 3});
        await page.type(Selector.inputField("order.shipAddress1"), shippingDetails.address1);
        await page.click(Selector.inputField("order.shipAddress2"), {clickCount: 3});
        await page.type(Selector.inputField("order.shipAddress2"), shippingDetails.address2);
        await page.click(Selector.inputField("order.shipCity"), {clickCount: 3});
        await page.type(Selector.inputField("order.shipCity"), shippingDetails.city);
        await page.click(Selector.inputField("order.shipState"), {clickCount: 3});
        await page.type(Selector.inputField("order.shipState"), shippingDetails.state);
        await page.click(Selector.inputField("order.shipZip"), {clickCount: 3});
        await page.type(Selector.inputField("order.shipZip"), shippingDetails.zipCode);
        await page.click(Selector.inputField("order.shipCountry"), {clickCount: 3});
        await page.type(Selector.inputField("order.shipCountry"), shippingDetails.country);
    }

    /**
     * Click on Continue Button
     */
    async clickShippingContinueBtn(){
        let ContinueBtn = await page.waitForSelector(Selector.continueBtn)
        await ContinueBtn.click();
    }
}
module.exports = ShippingDetailsForm;