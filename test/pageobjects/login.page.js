import Page from './page';

class LoginPage extends Page {

    /**
    * define elements
    */
    get emailInput()   { return $('//*[@id="email_create"]'); }    
    get createAccountButton()     { return $('//*[@id="SubmitCreate"]'); }
    get signInBtn() {return $('//*[@id="SubmitLogin"]');}
    get usernameInput(){return $('//*[@id="email"]');}
    get passwordInput(){return $('//*[@id="passwd"]')}
    get signOutBtn() {return $('//*[@id="header"]/div[2]/div/div/nav/div[2]/a');}
    

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('?controller=authentication&back=my-account')
        this.waitForloginPageToLoad();        
        //this.signInBtn.click();       //this will append `login` to the baseUrl to form complete URL
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */

    waitForloginPageToLoad () {
      if(!this.emailInput.isDisplayed()){
        this.emailInput.waitForDisplayed(10000);
      }
    }

    register (email) {
      this.waitForloginPageToLoad();      
      this.emailInput.setValue(email);      
      this.createAccountButton.click();
    }

    login(username,pswd){
      this.waitForloginPageToLoad(); 
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(pswd);
      this.signInBtn.click();
    }

    logout(){
      this.signOutBtn.click();
      this.waitForloginPageToLoad(); 
    }
}

export default new LoginPage()
