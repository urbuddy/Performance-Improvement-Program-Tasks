module.exports = {
    homePageURL: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login",
    inputField: function(value) {
        return "input[placeholder='"+value+"']";
    },
    tableCellValue: function(value){
        return "//td[normalize-space()='"+value+"']";
    },
    button: function(value) {
        return "button[ng-click='"+value+"()']";
    },
    submitButton: "button[type='submit']",
    accountSelect: "#userSelect",
    selectOption: function(value) {
        return "//option[contains(text(), '"+value+"')]";
    },
    currencySelect: "#currency",
    formButton: function(value) {
        return "//button[contains(text(), '"+value+"')]";
    },
    accountDeleteBtn: function(firstName) {
        return "//td[normalize-space()='"+firstName+"']/parent::tr//button";
    },
    accountHeader: "strong span",
    detailsVerification: function(value){
        return "//strong[normalize-space()='"+value+"']";
    },
    balance: "//div[@class='center']/strong/following::strong",
    spanText: function(value){
        return "//span[normalize-space()='"+value+"']";
    },
    responseText: "span[ng-show='message']",
    transactionStatus: function(value){
        return "//td[normalize-space()='"+value+"']";
    },
    transactionList: "tbody tr"
};