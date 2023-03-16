module.exports = {
    homePageURL: "https://www.saucedemo.com",
    userName: "#user-name",
    password: "#password",
    loginBtn: "#login-button",
    errorText: function(value) {
        return "//h3[contains(text(), '"+value+"')]";
    },
    allProducts: ".inventory_item .inventory_item_label a",
    productDetails: function(value) {
        return "//div[contains(text(),'"+value+"')]";
    },
    cartBtn: "div[id='shopping_cart_container'] a",
    menuBtn: "#react-burger-menu-btn",
    logOut: "#logout_sidebar_link",
    product: ".inventory_details_name",
    price: ".inventory_details_price",
    button: function(value) {
        return "//button[normalize-space()='"+value+"']";
    },
    cartProductName: ".inventory_item_name",
    cartPrice: ".inventory_item_price",
    cartDescription: ".inventory_item_desc",
    cartQuantity: ".cart_quantity",
    checkoutBtn: "#checkout",
    firstName: "#first-name",
    lastName: "#last-name",
    postalCode: "#postal-code",
    continueBtn: "#continue",
    titleText: ".title",
    greetingText: "div[id='checkout_complete_container'] h2",
    responseText: "div[id='checkout_complete_container'] div",
    backToHome: "#back-to-products",
    orderId: ".summary_value_label",
    logistic: "//div[normalize-space()='Shipping Information']/following::div[@class='summary_value_label']",
    orderPrice: ".summary_subtotal_label",
    tax: ".summary_tax_label",
    totalAmount: ".summary_total_label",
    finishBtn: "#finish"
};