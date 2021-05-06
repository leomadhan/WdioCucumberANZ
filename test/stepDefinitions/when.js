import {When} from 'cucumber';
import loginPage from '../pageobjects/login.page';
import landingPage    from '../pageobjects/landing.page';


When(/^I enter "([^"]*)" into the search box$/, function (arg1) {
    yahooPage.enterText(arg1);
    yahooPage.searchInput.getValue().should.equal(arg1);
});

When(/^I click the search button$/, function () {
    yahooPage.search();
});

// *** belongs to ta-loging  feature
When(/^I register with email "([^"]*)" into the text box$/, function (arg1) {   
    loginPage.register(arg1); 
});

When(/^Logout and login again "([^"]*)" "([^"]*)"$/, function (username, password){
    loginPage.logout();
    loginPage.login(username, password); 
});

When(/^login as "([^"]*)" "([^"]*)"$/, function (username, password){
    loginPage.login(username, password); 
});

When(/^Proceed to the checkout page display$/, function (){
    landingPage.cartCheckout(); 
});
