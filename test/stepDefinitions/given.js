import { Given, When } from 'cucumber';
import loginPage from '../pageobjects/login.page';
//import yahooPage from '../pageobjects/yahoo-search.page';


// *** belongs to Yahoo serch feature
/*Given(/^I am on the search page$/, function () {
  yahooPage.open();
  browser.getTitle().should.equal('Yahoo Search - Web Search');
});*/

Given('I am on the login page', function () {
  // Write code here that turns the phrase above into concrete actions
  loginPage.open();     // navigating to login page
});

/*When(/^I register with email "([^"]*)"$/, function (mailid) {  
  loginPage.login(mailid); 
});*/

