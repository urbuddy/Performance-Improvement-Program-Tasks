const Selector = require("../Selectors/Selectors");

class OrderDetailsPage{

    /**
     * Verify order details
     * @param {Object} details - Order Details
     * @param {string} details.text - Order ID
     * @param {string} details.deliveryService - Logistic and Services
     * @param {string} details.price - Product Price 
     * @param {string} details.taxCharges - Other Tax Charges
     * @param {string} details.totalAmount -  total Amount to Pay
     */
    async verifyOrderDetails(details){
        await page.waitForSelector(Selector.orderId);
        expect(await page.$eval(Selector.orderId, ele => ele.innerText)).toContain(details.text);
        await page.waitForXPath(Selector.logistic);
        let logistic = await page.evaluate(element => {
            return element.textContent;
        }, (await page.$x(Selector.logistic))[0]);
        expect(logistic).toBe(details.deliveryService);
        expect(await page.$eval(Selector.orderPrice, ele => ele.innerText)).toContain(details.price);
        expect(await page.$eval(Selector.tax, ele => ele.innerText)).toContain(details.taxCharges);
        expect(await page.$eval(Selector.totalAmount, ele => ele.innerText)).toContain(details.totalAmount);
    }
    /**
     * Click on finish button
     */
    async clickOrderFinishBtn(){
        let finishBtn = await page.waitForSelector(Selector.finishBtn);
        await finishBtn.click();
    }
}
module.exports = OrderDetailsPage;