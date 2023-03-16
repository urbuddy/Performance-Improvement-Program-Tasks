const Selector = require("../Selectors/Selectors");
class AddCustomerForm{

    /**
     * Add New Customer Form
     * @param {Object} customerDetails 
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