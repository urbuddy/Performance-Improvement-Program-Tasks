class Index {
    LoginPage = require("./LoginPage");
    HomePage = require("./HomePage");
    ProductDetailsPage = require("./ProductDetailsPage");
    OrderDetailsPage = require("./OrderDetailsPage");
    CartPage = require("./CartPage");
    CheckoutForm = require("./CheckoutForm");
    OrderSuccessfullPage = require("./OrderSuccessfullPage");
    homePage = new this.HomePage();
    loginPage = new this.LoginPage();
    productDetailsPage = new this.ProductDetailsPage();
    orderDetailsPage = new this.OrderDetailsPage();
    cartPage = new this.CartPage();
    checkoutForm = new this.CheckoutForm();
    orderSuccessfullPage = new this.OrderSuccessfullPage();
}
module.exports = Index;