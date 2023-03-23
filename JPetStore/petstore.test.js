const { homePage, signInPage, signUpPage, myAccountPage, searchProductPage, subCategoryPage, subSpeciesPage, productDetailsPage, cartPage, billingDetailsForm, orderConfirmPage, orderSuccessfullPage } = new (require("./pageModules/Index"));
describe("Pet Store Site Automation", () =>{

    test("Pet Store Site Automation", async() => {
        
        await homePage.openHomePageURL();

        await homePage.clickSignInBtn();

        await signInPage.clickSignUpBtn();
        let user= {
            userName: "EEE",
            password: "AAAbbb@123",
            firstName: "AAA",
            lastName: "BBB",
            email: "aaa@bbb.com",
            phone: "1234567890",
            address1: "CCC",
            address2: "DDD",
            city: "EEE",
            state: "FFF",
            zipCode: "12345",
            country: "GGG",
            language: "english",
            favPet: "DOGS"
        };
        await signUpPage.fillSignUpForm(user);

        await homePage.clickSignInBtn();
        await signInPage.fillSignInForm(user);
        
        await homePage.clickMyAccountBtn();
        await myAccountPage.verifyAccountDetails(user);

        await homePage.searchProduct("bulldog");

        let searchProduct = {
            productLength: 1,
            value: "Bulldog"
        };
        await searchProductPage.verifySearchedProduct(searchProduct);

        await homePage.openHomePageLink();

        await homePage.verifyTotalCategiriesOfPet(5);

        await homePage.clickPetCategorySelection("CATS");

        let petId = await subCategoryPage.getPetId("Persian");

        await subSpeciesPage.verifyPetId(petId);
    
        let productDetails = await subSpeciesPage.getItemIdAndPrice(petId);

        let product = {
            itemId: productDetails.itemID,
            price: productDetails.priceOfPet,
            petID: petId,
            species: "Manx",
        };
        await productDetailsPage.verifyProductDetails(product);

        await productDetailsPage.clickAddToCartProductBtn();

        await cartPage.verifyCartProduct(product);
        await cartPage.clickProductCheckoutBtn();
        let billingdetails = {
            cardType: "MasterCard",
            creditCard: "111 1111 1111 1111",
            expiryDate: "02/25",
            firstName: "XXX",
            lastName: "YYY",
            address1: "ZZZ",
            address2: "WWW",
            city: "UUU",
            state: "VVV",
            zipCode: "12345",
            country: "TTT",
            shippingAddressRequired: true,
            totalPrice: product.price
        };

        let shippingDetails = {
            firstName: "LLL",
            lastName: "MMM",
            address1: "NNN",
            address2: "OOO",
            city: "PPP",
            state: "QQQ",
            zipCode: "12345",
            country: "RRR",
        };

        await billingDetailsForm.fillBillingAndShippingDetailsForms(billingdetails, shippingDetails);
        await orderConfirmPage.verifyBillingAndShippingDetails(billingdetails, shippingDetails);
        await orderConfirmPage.clickOrderConfirmBtn();

        await orderSuccessfullPage.verifyPetOrdered("Thank you, your order has been submitted.");
        await orderSuccessfullPage.verifyPriceAndCardDetails(billingdetails);

        await homePage.clickLogOutBtn();
    });
});