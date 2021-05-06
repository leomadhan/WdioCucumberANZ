import Page from './page'

class LandingPage extends Page {

    /**
    * define elements
    */
    get userinfosect () { return $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a'); }
    get homePageTab(){return $('//*[@id="center_column"]/ul/li/a/span');}
    get addProductCart(){return $('//*[@id="homefeatured"]/li[1]');}
    get addToCartBtn(){return $('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]/span');}

    get layerCartPop(){return $('//*[@id="layer_cart"]/div[1]');}
    get proceedToCheckout(){return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span');}
    
    waitForLandingPageToLoad () {
      if(!this.userinfosect.isDisplayed()){
        this.userinfosect.waitForDisplayed(5000);
      }
    }
    verifyLandingScreen (){
      this.waitForLandingPageToLoad();      
      return this.userinfosect.getText();
    }

    addProduct(){
      this.homePageTab.click();
      this.waitForLandingPageToLoad();  
      this.addProductCart.click();
      this.addToCartBtn.click();
    }

    cartCheckout(){
        if(this.cartCheckout.isDisplayed()){
            this.proceedToCheckout.click();
        }
    }

}

export default new LandingPage();
