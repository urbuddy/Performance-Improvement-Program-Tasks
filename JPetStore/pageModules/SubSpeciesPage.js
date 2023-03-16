const Selector = require("../Selectors/Selectors");
class SubSpeciesPage{

    /**
     * Verify Pet ID
     * @param {string} petId 
     */
    async verifyPetId(petId){
        await page.waitForXPath(Selector.tableCellValue(petId),{visible:true});
        let verifyPetId = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(petId)))[0]);
        expect(verifyPetId).toBe(petId);
    }

    /**
     * Get Item ID
     * @param {string} petId 
     * @returns {Object} Item ID and Price
     */
    async getItemIdAndPrice(petId){
        let productDetailsLink = await page.waitForXPath(Selector.itemId(petId), {visible: true});
        let itemId = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.itemId(petId)))[0]);
        let price = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.price(petId)))[0]);
        await productDetailsLink.click();
        return {itemID: itemId, priceOfPet: price};
    }
}
module.exports = SubSpeciesPage;