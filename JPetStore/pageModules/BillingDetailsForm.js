const Selector = require("../Selectors/Selectors");
const ShippingDetailsForm = require("./ShippingDetailsForm");
const shippingDetailsForm = new ShippingDetailsForm();

class BillingDetailsForm{

    /**
     * Billing Details Form
     * @param {Object} billingDetails - Billing Details
     * @param {string} billingDetails.cardType - Credit Card Name
     * @param {string} billingDetails.creditCard - Credit Card Number
     * @param {string} billingDetails.expiryDate - Credit Card Expiry Date
     * @param {string} billingDetails.firstName - Customer First Name 
     * @param {string} billingDetails.lastName - Customer Last Name 
     * @param {string} billingDetails.address1 - Customer Home Address
     * @param {string} billingDetails.address2 - Customer City Area Address
     * @param {string} billingDetails.city - Customer City Name 
     * @param {string} billingDetails.state - Customer State Name 
     * @param {string} billingDetails.zipCode - Customer Postal Code 
     * @param {string} billingDetails.country - Customer Country Name 
     * @param {boolean} billingDetails.shippingAddressRequired - Is Shipping Address different?(Yes: true/ No: false)
     * @param {string} billingDetails.totalPrice - total Charges 
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
     * @param {Object} billingDetails - Billing Details
     * @param {string} billingDetails.cardType - Credit Card Name
     * @param {string} billingDetails.creditCard - Credit Card Number
     * @param {string} billingDetails.expiryDate - Credit Card Expiry Date
     * @param {string} billingDetails.firstName - Customer First Name 
     * @param {string} billingDetails.lastName - Customer Last Name 
     * @param {string} billingDetails.address1 - Customer Home Address
     * @param {string} billingDetails.address2 - Customer City Area Address
     * @param {string} billingDetails.city - Customer City Name 
     * @param {string} billingDetails.state - Customer State Name 
     * @param {string} billingDetails.zipCode - Customer Postal Code 
     * @param {string} billingDetails.country - Customer Country Name 
     * @param {boolean} billingDetails.shippingAddressRequired - Is Shipping Address different?(Yes: true/ No: false)
     * @param {string} billingDetails.totalPrice - total Charges 
     * 
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
