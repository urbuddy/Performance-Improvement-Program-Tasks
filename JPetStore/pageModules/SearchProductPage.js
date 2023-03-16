const Selector = require("../Selectors/Selectors");
class SearchProductPage {

    /**
     * Verify Searched Product
     * @param {Object} searchedProduct - Searched Product Details
     * @param {number} searchedProduct.productLength - Total Number of Product searched By Name
     * @param {string} searchedProduct.value - Searched Product Name
     */
    async verifySearchedProduct(searchedProduct){
        await page.waitForSelector(Selector.tableRows);
        let searchedPets = await page.$$(Selector.tableRows);
        expect(searchedPets.length - 2).toBe(searchedProduct.productLength);
        await page.waitForXPath(Selector.tableCellValue(searchedProduct.value));
        let verifyPetName = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.tableCellValue(searchedProduct.value)))[0]);
        expect(verifyPetName).toContain(searchedProduct.value);
    }
}
module.exports = SearchProductPage;