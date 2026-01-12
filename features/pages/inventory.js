const { $, $$ } = require('@wdio/globals');
const Page = require('./page');

/**
 * A class having selectors and methods for a inventory page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dropdownProductSort () {
        return $('.product_sort_container');
    }

    get btnAddToCart () {
        return $$('button=Add to cart');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addItemsToCart (numberOfItems) {
        const itemQuantity = parseInt(numberOfItems, 10);
        for (let i = 0; i < numberOfItems; i++) {
            await this.btnAddToCart[i].click();
        }
       
    }

    async goToCart () {
        await this.linkShoppingCart.click();
    }

}

module.exports = new InventoryPage();
