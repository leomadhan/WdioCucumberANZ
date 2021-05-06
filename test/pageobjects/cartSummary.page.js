import Page from './page'

class CartSummaryPage extends Page {

    /**
    * define elements
    */
    get homePageTab(){return $('//*[@id="center_column"]/ul/li/a/span');}
    get cartTitle(){return $('//*[@id="cart_title"]');}
    get ProductNameInCart(){return $('tr > td.cart_description > p');}
    get addToCartBtn(){return $('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]/span');}

    get layerCartPop(){return $('//*[@id="layer_cart"]/div[1]');}
    get proceedToCheckout(){return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span');}
    
    waitForsummaryPageToLoad () {
      if(!this.cartTitle.isDisplayed()){
        this.cartTitle.waitForDisplayed(5000);
      }
    }
    verifyProductName (){
      this.waitForsummaryPageToLoad();      
      return this.ProductNameInCart.getText();
    }

    addProduct(){
      this.homePageTab.click();
      this.waitForLandingPageToLoad();  
      this.addProductCart.moveTo();
      this.addToCartBtn.click();
    }

    cartCheckout(){
        if(!this.cartCheckout.isDisplayed()){
            this.proceedToCheckout.click();
        }
    }

}

export default new CartSummaryPage();
