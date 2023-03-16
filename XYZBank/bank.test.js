const { homePage, accountPage, managerHomePage, addCustomerForm, openAccountForm, customerListTable, customerHomePage, amountWithdrawForm , transactionPage, amountDepositForm } = new (require("./pageModules/Index"));

describe("XYZ Bank Web-Site Automation", () =>{
    
    test("Login as Manager", async() => {
        await homePage.openHomePage();
        await homePage.clickManagerLoginBtn()

        let customer = {
            firstName: "AAA",
            lastName: "BBB",
            postCode: "12345",
            responseText: "Customer added successfully"
        };
        await managerHomePage.clickAddCustomersBtn();
        await addCustomerForm.fillAddNewCustomerForm(customer);
        await managerHomePage.clickOpenAccountBtn();

        let accountDetails = {
            firstName: customer.firstName,
            currency: "Rupee",
            responseText: "Account created successfully"
        };
        let accountNo = await openAccountForm.fillOpenNewAccountForm(accountDetails);

        await managerHomePage.clickShowCustomersBtn();
        let customerDetails = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            postCode: customer.postCode,
            AcNo: accountNo,
        };
        await customerListTable.verifyCustomerDetails(customerDetails);

        await homePage.clickMainHomePageBtn();
        await homePage.clickCustomerLoginBtn();

        await customerHomePage.fillLoginAccountForm(customer.firstName);

        let customerAccountDetails = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            AcNo: accountNo,
            currency: accountDetails.currency
        };
        await accountPage.verifyAccountDetails(customerAccountDetails);
        let currentBalance = await accountPage.getAccountBalance();
        await accountPage.clickDepositAmountBtn();

        let depositAmountDetails = {
            amount: "110",
            responseText: "Deposit Successful",
            beforeTansactionAcBalance: currentBalance
        }
        await amountDepositForm.fillDepositAmountForm(depositAmountDetails);

        currentBalance = await accountPage.getAccountBalance();
        await accountPage.clickWithdrawAmountBtn();

        let withdrawalAmountDetails = {
            amount: "100",
            responseText: "Transaction successful",
            beforeTansactionAcBalance: currentBalance
        }
        await amountWithdrawForm.fillWithdrawAmountForm(withdrawalAmountDetails);
        await accountPage.clickShowTransactionBtn();

        let transactionDetails = {
            firstTransactionAmount: depositAmountDetails.amount,
            firstTransactionStatus: "Credit",
            secondTransactionAmount: withdrawalAmountDetails.amount,
            secondTransactionStatus: "Debit"
        }
        await transactionPage.verifyTransactions(transactionDetails);

        await homePage.clickMainHomePageBtn();
        await homePage.clickManagerLoginBtn();
        await managerHomePage.clickShowCustomersBtn();
        await customerListTable.clickDeleteCustomerAccountBtn(customer.firstName);
    });
});