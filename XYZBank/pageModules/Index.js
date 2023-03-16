class Index {
    HomePage = require("./HomePage");
    ManagerHomePage = require("./ManagerHomePage");
    CustomerHomePage = require("./CustomerHomePage");
    AddCustomerForm = require("./AddCustomerForm");
    CustomerListTable = require("./CustomerListTable");
    AccountPage = require("./AccountPage");
    OpenAccountForm = require("./OpenAccountForm");
    TransactionPage = require("./TransactionPage");
    AmountDepositForm = require("./AmountDepositForm");
    AmountWithdrawForm = require("./AmountWithdrawForm");
    homePage = new this.HomePage();
    managerHomePage = new this.ManagerHomePage();
    customerHomePage = new this.CustomerHomePage();
    addCustomerForm = new this.AddCustomerForm();
    customerListTable = new this.CustomerListTable();
    accountPage = new this.AccountPage();
    openAccountForm = new this.OpenAccountForm();
    transactionPage = new this.TransactionPage();
    amountDepositForm = new this.AmountDepositForm();
    amountWithdrawForm = new this.AmountWithdrawForm();
}
module.exports = Index;