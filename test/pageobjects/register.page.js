import Page from './page'

class RegisterPage extends Page {

    /**
    * define elements
    */

    get pageHeading () { return $('//*[@id="account-creation_form"]/div[1]/h3'); }
    get firstNameTxt() {return $('//*[@id="customer_firstname"]');}
    get lastNameTxt(){return $('//*[@id="customer_lastname"]');}
    get passwordTxt(){return $('//*[@id="passwd"]');}
    get addressTxt(){return $('//*[@id="address1"]');}
    get cityTxt(){return $('//*[@id="city"]');}
    get zipcodeTxt(){return $('//*[@id="postcode"]');}
    get mobileTxt(){return $('//*[@id="phone_mobile"]');}

    get titleRdbtn(){return $('//*[@id="uniform-id_gender1"]');}
    get stateDrpdwn(){return $('//*[@id="id_state"]');}


    get registerBtn(){return $('//*[@id="submitAccount"]');}


    
    waitForLandingPageToLoad () {
      if(!this.pageHeading.isDisplayed()){
        this.pageHeading.waitForDisplayed(5000);
      }
    }
    getMessage (){
      return this.pageHeading.getText();
    }

    fillFormAndRegister(){

      this.titleRdbtn.click();
      this.firstNameTxt.setValue("aa");
      this.lastNameTxt.setValue("zz");
      this.passwordTxt.setValue("12345");
      this.addressTxt.setValue("LA");
      this.cityTxt.setValue("LA");
      this.stateDrpdwn.selectByIndex(5);
      this.zipcodeTxt.setValue("90011");
      this.mobileTxt.setValue("987654321");

      this.registerBtn.click();
      browser.pause(3000);
    }

}

export default new RegisterPage();
