import { Given, When } from 'cucumber';
import loginPage from '../pageobjects/login.page';


Given('I am on the login page', function () {
  // Write code here that turns the phrase above into concrete actions
  loginPage.open();     // navigating to login page
});


