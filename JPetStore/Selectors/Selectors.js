module.exports = {
    homePageURL: "https://petstore.octoperf.com/actions/Catalog.action",
    link: function(value) {
        return "//a[normalize-space()='"+value+"']";
    },
    inputField: function(value) {
        return "input[name='"+value+"']";
    },
    petCategoryLink: function(category) {
        return "a[href='/actions/Catalog.action?viewCategory=&categoryId="+category+"']";
    },
    homePageLink: "#LogoContent a",
    sidebarElements: "#SidebarContent a img",
    welcomeMsg: "#WelcomeContent",
    selectOption: function( selectName, optionValue) {
        return "select[name='"+selectName+"'] option[value='"+optionValue+"']";
    },
    selectName: function(value) {
        return "select[name='"+value+"']";
    },
    tableCellValue: function(value){
        return "//td[normalize-space()='"+value+"']";
    },
    tableRows: "tbody tr",
    categorySelector: function(subCategory) {
        return "//td[normalize-space()='"+subCategory+"']/preceding::td";
    },
    itemId: function(petId) {
        return "//td[normalize-space()='"+petId+"']/preceding::td/a";
    },
    price: function(petId) {
        return "//td[normalize-space()='"+petId+"']/following::td/following::td";
    },
    boldItemId: function(value) {
        return "//b[normalize-space()='"+value+"']";
    },
    continueBtn: "input[value='Continue']",
    responseText: "#Content .messages li",
    textContain: function(value) {
        return "//td[contains(text(),'"+value+"')]";
    }
};