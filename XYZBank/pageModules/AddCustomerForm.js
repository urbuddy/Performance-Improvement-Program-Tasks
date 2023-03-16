const Selector = require("../Selectors/Selectors");
class AddCustomerForm{

    /**
     * Add New Customer Form
     * @param {Object} customerDetails - Customer Details
     * @param {string} customerDetails.firstName - Customer First Name
     * @param {string} customerDetails.lastName - Customer Last Name
     * @param {string} customerDetails.postCode - Customer Postal Code
     * @param {string} customerDetails.responseText - Response Text after created Customer
     */
    async fillAddNewCustomerForm(customerDetails){
        await page.waitForSelector(Selector.inputField("First Name"));
        await page.type(Selector.inputField("First Name"), customerDetails.firstName);
        await page.type(Selector.inputField("Last Name"), customerDetails.lastName);
        await page.type(Selector.inputField("Post Code"), customerDetails.postCode);
        let confirmedText;
        await page.on('dialog', async dialog => { 
            confirmedText = dialog.message();
            await dialog.accept();
        });
        let addcustomerSubmitBtn = await page.waitForSelector(Selector.submitButton);
        await addcustomerSubmitBtn.click();
        expect(confirmedText).toContain(customerDetails.responseText);
    }
}
module.exports = AddCustomerForm;