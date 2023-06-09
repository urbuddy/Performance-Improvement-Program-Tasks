class Index {
    HomePage = require("./HomePage");
    SignUpPage = require("./SignUpPage");
    SignInPage = require("./SignInPage");
    SearchProductPage = require("./SearchProductPage");
    ProductDetailsPage = require("./ProductDetailsPage");
    CartPage = require("./CartPage");
    SubCategoryPage = require("./SubCategoryPage");
    SubSpeciesPage = require("./SubSpeciesPage");
    OrderConfirmPage = require("./OrderConfirmPage");
    OrderSuccesssfullPage = require("./OrderSuccessfullPage");
    MyAccountPage = require("./MyAccountPage");
    BillingDetailsForm = require("./BillingDetailsForm");
    homePage = new this.HomePage();
    signInPage = new this.SignInPage();
    signUpPage = new this.SignUpPage();
    searchProductPage = new this.SearchProductPage();
    productDetailsPage = new this.ProductDetailsPage();
    cartPage = new this.CartPage();
    subCategoryPage = new this.SubCategoryPage();
    subSpeciesPage = new this.SubSpeciesPage();
    myAccountPage = new this.MyAccountPage();
    billingDetailsForm = new this.BillingDetailsForm();
    orderConfirmPage = new this.OrderConfirmPage();
    orderSuccessfullPage = new this.OrderSuccesssfullPage();
};
module.exports = Index;