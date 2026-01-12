const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnCheckout () {
        return $('#checkout');
    }

    get btnContinueShopping () {
        return $('#continue-shopping');
    }

    async goToCheckout () {
        await this.btnCheckout.click();
    } 

}

module.exports = new CartPage();