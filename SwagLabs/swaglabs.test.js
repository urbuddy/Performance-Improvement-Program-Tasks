const { homePage, loginPage, productDetailsPage, cartPage, checkoutForm, orderDetailsPage, orderSuccessfullPage } = new (require("./pageModules/Index"));

describe("Swag Labs Site Automation", () => {

    test("Standard User Automation", async() =>{
        await loginPage.openHomePageURL();
        let user = {
            userName: "standard_user",
            password: "secret_sauce"
        }
        await loginPage.fillLoginForm(user);
        await homePage.verifyNoOfProducts(6)
        let productName = "Sauce Labs Backpack";
        await homePage.openProductsDetails(productName);
        let product = {
            name: productName,
            price: "$29.99",
            description: "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
        }
        await productDetailsPage.verifyProductDetails(product);

        await productDetailsPage.clickAddToCartProductBtn();
        
        await homePage.clickOpenCartBtn();
        let cartProductDetails = {
            name: productName,
            price: product.price,
            description: product.description,
            quantity: "1",
        }
        await cartPage.verifyCartProductDetails(cartProductDetails);

        await cartPage.clickCheckoutProductBtn();
        let customerDetails = {
            firstName: "AAA",
            lastName: "BBB",
            postCode: "12345"
        }
        await checkoutForm.fillCheckoutForm(customerDetails);
        await checkoutForm.clickContinueBtn();

        let orderDetails = {
            text: "SauceCard #",
            deliveryService: "Free Pony Express Delivery!", 
            price: "$29.99",
            taxCharges: "$2.40",
            totalAmount: "$32.39"
        }
        await orderDetailsPage.verifyOrderDetails(orderDetails);
        await orderDetailsPage.clickOrderFinishBtn();
        let responseResult = {
            processCompleteText:"Checkout: Complete!",
            greetingText: "Thank you for your order!",
            message: "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
        }
        await orderSuccessfullPage.verifyProductOrdered(responseResult);
        
        await orderSuccessfullPage.clickBackToHomeBtn();

        await homePage.clickOpenMenuBtn();

        await homePage.clickLogoutBtn();
    });

    test("Locked User Automation", async() =>{
        await loginPage.openHomePageURL();
        let user = {
            userName: "locked_out_user",
            password: "secret_sauce"
        }
        await loginPage.fillLoginForm(user, "Epic sadface: Sorry, this user has been locked out.");
    });

    test("Problem User Automation", async()=>{
        let user = {
            userName: "problem_user",
            password: "secret_sauce"
        }
        await loginPage.fillLoginForm(user);
        let productName = "Sauce Labs Backpack";
        await homePage.openProductsDetails(productName);
        await productDetailsPage.verifyProductDetailsForProblemUser(productName);
        await homePage.clickOpenMenuBtn();
        await homePage.clickLogoutBtn();
    });
});