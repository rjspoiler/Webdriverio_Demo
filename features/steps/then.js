const { Then } = require('@wdio/cucumber-framework');
const { browser } = require('@wdio/globals');

const CheckoutPage = require('../pages/checkout');

Then(/^I expect that checkout process is successfully completed$/, async () => {
    await CheckoutPage.verifyCheckoutComplete();
    //adding this pause so that we can see the result before the browser closes - this is only for demo purposes
    await browser.pause(3000);
});