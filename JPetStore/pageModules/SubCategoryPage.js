const Selector = require("../Selectors/Selectors");
class SubCategoryPage{

    /**
     * Get Pet ID
     * @param {string} subCategory 
     * @returns {string} Pet ID
     */
    async getPetId(subCategory){
        let subCategoryOfPet = await page.waitForXPath(Selector.categorySelector(subCategory));
        let petId = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.categorySelector(subCategory)))[0]);
        await subCategoryOfPet.click();
        return petId;
    }
}
module.exports = SubCategoryPage;