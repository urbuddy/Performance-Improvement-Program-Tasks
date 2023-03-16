const Selector = require("../Selectors/Selectors");
class SignUpPage {

    /**
     * Sign Up Form
     * @param {Object} userDetails - Customer Details
     * @param {string} userDetails.firstName - Customer First Name 
     * @param {string} userDetails.lastName - Customer Last Name 
     * @param {string} userDetails.address1 - Customer Home Address
     * @param {string} userDetails.address2 - Customer City Area Address
     * @param {string} userDetails.city - Customer City Name 
     * @param {string} userDetails.state - Customer State Name 
     * @param {string} userDetails.zipCode - Customer Postal Code 
     * @param {string} userDetails.country - Customer Country Name
     * @param {string} userDetails.email - Customer Email 
     * @param {string} userDetails.phone - Customer Contact Number
     * @param {string} userDetails.email - Customer Email 
     * @param {string} userDetails.phone - Customer Contact Number 
     * @param {string} userDetails.userName - Customer User Name
     * @param {string} userDetails.password - Customer Password
     * @param {string} userDetails.language - Customer Language
     * @param {string} userDetails.favPet - Customer Favorite Pet
     */
    async fillSignUpForm(userDetails){
        await page.waitForNetworkIdle({idleTime: 100});
        await page.waitForSelector(Selector.inputField("username"));
        await page.type(Selector.inputField("username"), userDetails.userName);
        await page.type(Selector.inputField("password"), userDetails.password);
        await page.type(Selector.inputField("repeatedPassword"), userDetails.password);
        await page.type(Selector.inputField("account.firstName"), userDetails.firstName);
        await page.type(Selector.inputField("account.lastName"), userDetails.lastName);
        await page.type(Selector.inputField("account.email"), userDetails.email);
        await page.type(Selector.inputField("account.phone"), userDetails.phone);
        await page.type(Selector.inputField("account.address1"), userDetails.address1);
        await page.type(Selector.inputField("account.address2"), userDetails.address2);
        await page.type(Selector.inputField("account.city"), userDetails.city);
        await page.type(Selector.inputField("account.state"), userDetails.state);
        await page.type(Selector.inputField("account.zip"), userDetails.zipCode);
        await page.type(Selector.inputField("account.country"), userDetails.country);
        await page.waitForSelector(Selector.selectOption("account.languagePreference", userDetails.language));
        await page.select(Selector.selectName("account.languagePreference"), userDetails.language);
        await page.waitForSelector(Selector.selectOption("account.favouriteCategoryId", userDetails.favPet));
        await page.select(Selector.selectName("account.favouriteCategoryId"), userDetails.favPet);
        await page.click(Selector.inputField("account.listOption"));
        await page.click(Selector.inputField("account.bannerOption"));
        let formSubmitLink = await page.waitForSelector(Selector.inputField("newAccount"), {visible: true});
        await formSubmitLink.click();
    }
}
module.exports = SignUpPage;