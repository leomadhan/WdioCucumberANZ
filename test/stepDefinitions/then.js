import { Then }     from 'cucumber';
import registerPage  from '../pageobjects/register.page';
import landingPage    from '../pageobjects/landing.page';
import cartSummaryPage from '../pageobjects/cartSummary.page';

Then(/^I should land on the account-landing page and check "([^"]*)"$/, function (username) {
  landingPage.verifyLandingScreen().should.equal(username);
});

// *** belongs to ta-loging  feature
Then(/^I should see the message "([^"]*)" on the account-creation page and register$/, function (message) {
  registerPage.getMessage().should.equal(message);
  registerPage.fillFormAndRegister();
});

Then(/^Add a product to the cart$/, function (){
  landingPage.addProduct();
});

Then(/^Validate on the payments page if the product details "([^"]*)" are correct.$/, function(productName){
  cartSummaryPage.verifyProductName().should.equal(productName);
});
