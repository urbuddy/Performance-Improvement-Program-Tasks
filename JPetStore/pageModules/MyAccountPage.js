const Selector = require("../Selectors/Selectors");
class MyAccountPage{

    /**
     * Verify Account Details
     * @param {Object} userDetails 
     */
    async verifyAccountDetails(userDetails){
        await page.waitForXPath(Selector.tableCellValue(userDetails.userName));
        let userName = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(userDetails.userName)))[0]);
        expect(userName).toContain(userDetails.userName);
        await page.waitForSelector(Selector.inputField("account.firstName"));
        expect(await page.$eval(Selector.inputField("account.firstName"), ele => ele.value)).toContain(userDetails.firstName);
        expect(await page.$eval(Selector.inputField("account.lastName"), ele => ele.value)).toContain(userDetails.lastName);
        expect(await page.$eval(Selector.inputField("account.email"), ele => ele.value)).toContain(userDetails.email);
        expect(await page.$eval(Selector.inputField("account.phone"), ele => ele.value)).toContain(userDetails.phone);
        expect(await page.$eval(Selector.inputField("account.address1"), ele => ele.value)).toContain(userDetails.address1);
        expect(await page.$eval(Selector.inputField("account.address2"), ele => ele.value)).toContain(userDetails.address2);
        expect(await page.$eval(Selector.inputField("account.city"), ele => ele.value)).toContain(userDetails.city);
        expect(await page.$eval(Selector.inputField("account.state"), ele => ele.value)).toContain(userDetails.state);
        expect(await page.$eval(Selector.inputField("account.zip"), ele => ele.value)).toContain(userDetails.zipCode);
        expect(await page.$eval(Selector.inputField("account.country"), ele => ele.value)).toContain(userDetails.country);
    }
}
module.exports = MyAccountPage;