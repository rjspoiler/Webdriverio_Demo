const { expect, $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName() {
        return $('#first-name');
    }

    get inputLastName() {
        return $('#last-name');
    }

    get inputPostalCode() {
        return $('#postal-code');
    }

    get btnCancel() {
        return $('#cancel');
    }

    get btnContinue() {
        return $('#continue');
    }

    get btnFinish() {
        return $('#finish');
    }

    get checkoutStatus() {
        return $('span=Checkout: Complete!');
    }

    get checkoutCompleteHeader() {
        return $('#checkout_complete_container .complete-header');
    }

    get checkoutCompleteMsg() {
        return $('#checkout_complete_container .complete-text');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async completeCheckoutProcess(firstName, lastName, postalCode) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPostalCode.setValue(postalCode);
        await this.btnContinue.click();
        await this.btnFinish.click();
    }

    async verifyCheckoutComplete() {
        await this.checkoutStatus.waitForDisplayed(); // Ensure the element is displayed
        const checkoutStatusText = await this.checkoutStatus.getText();
        const checkoutCompleteHeaderText = await this.checkoutCompleteHeader.getText();
        const checkoutCompleteMsgText = await this.checkoutCompleteMsg.getText();

        expect(await this.checkoutStatus.getText()).toEqual('Checkout: Complete!');
        expect(await this.checkoutCompleteHeader.getText()).toEqual('Thank you for your order!');
        expect(await this.checkoutCompleteMsg.getText()).toEqual('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }

}

module.exports = new CheckoutPage();
