const Selector = require("../Selectors/Selectors");
const ShippingDetailsForm = require("./ShippingDetailsForm");
const shippingDetailsForm = new ShippingDetailsForm();

class BillingDetailsForm{

    /**
     * Billing Details Form
     * @param {Object} billingDetails 
     */
    async fillBillingDetailsForm(billingDetails){
        await page.waitForNetworkIdle({idleTime: 100});
        await page.waitForSelector(Selector.selectOption("order.cardType", billingDetails.cardType));
        await page.select(Selector.selectName("order.cardType"), billingDetails.cardType);
        await page.click(Selector.inputField("order.creditCard"),  {clickCount: 3});
        await page.type(Selector.inputField("order.creditCard"), billingDetails.creditCard);
        await page.click(Selector.inputField("order.expiryDate"),  {clickCount: 3});
        await page.type(Selector.inputField("order.expiryDate"), billingDetails.expiryDate);
        await page.waitForSelector(Selector.inputField("order.billToFirstName"));
        await page.click(Selector.inputField("order.billToFirstName"),  {clickCount: 3});
        await page.type(Selector.inputField("order.billToFirstName"), billingDetails.firstName);
        await page.click(Selector.inputField("order.billToLastName"), {clickCount: 3});
        await page.type(Selector.inputField("order.billToLastName"), billingDetails.lastName);
        await page.click(Selector.inputField("order.billAddress1"), {clickCount: 3});
        await page.type(Selector.inputField("order.billAddress1"), billingDetails.address1);
        await page.click(Selector.inputField("order.billAddress2"), {clickCount: 3});
        await page.type(Selector.inputField("order.billAddress2"), billingDetails.address2);
        await page.click(Selector.inputField("order.billCity"), {clickCount: 3});
        await page.type(Selector.inputField("order.billCity"), billingDetails.city);
        await page.click(Selector.inputField("order.billState"), {clickCount: 3});
        await page.type(Selector.inputField("order.billState"), billingDetails.state);
        await page.click(Selector.inputField("order.billZip"), {clickCount: 3});
        await page.type(Selector.inputField("order.billZip"), billingDetails.zipCode);
        await page.click(Selector.inputField("order.billCountry"), {clickCount: 3});
        await page.type(Selector.inputField("order.billCountry"), billingDetails.country);
        if(billingDetails.shippingAddressRequired){
            await page.click(Selector.inputField("shippingAddressRequired"));
        }
    }

    /**
     * Billing and Shipping Details Form
     * @param {Object} billingDetails 
     * @param {Object} shippingDetails 
     */
    async fillBillingAndShippingDetailsForms(billingDetails, shippingDetails){
        if(billingDetails.shippingAddressRequired){
            await this.fillBillingDetailsForm(billingDetails);
            await this.clickBillingContinueBtn();
            await shippingDetailsForm.fillShippingDetailsForm(shippingDetails);
            await shippingDetailsForm.clickShippingContinueBtn();
        }
        else {
            await this.fillBillingDetailsForm(billingDetails);
            await this.clickBillingContinueBtn();
        }
    }

    /**
     * Click on Continue Button
     */
    async clickBillingContinueBtn(){
        let homeBtn = await page.waitForSelector(Selector.continueBtn)
        await homeBtn.click();
    }
}
module.exports = BillingDetailsForm;
