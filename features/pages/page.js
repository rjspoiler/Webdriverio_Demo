const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
     * define selectors using getter methods
     */
    get btnOpenMenu() {
        return $('#react-burger-menu-btn');
    }

    get linkShoppingCart() {
        return $('.shopping_cart_link');
    }

    async logout () {
        await this.btnOpenMenu.click();
        const logoutButton = await $('=Logout');
        await logoutButton.click();
    }

}
