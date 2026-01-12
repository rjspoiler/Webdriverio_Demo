const { When } = require('@wdio/cucumber-framework');
const { browser } = require('@wdio/globals');

const LoginPage = require('../pages/login');
const InventoryPage = require('../pages/inventory');
const CheckoutPage = require('../pages/checkout');
const CartPage = require('../pages/cart');


When(/^I login into the application$/, async () => {
    await LoginPage.login()
    //adding this pause so that we can see the result before the browser closes - this is only for demo purposes
    await browser.pause(3000);
});

When(/^I add (\d+) items to the cart$/, async (numberOfItems) => {
    await InventoryPage.addItemsToCart(numberOfItems);
    //adding this pause so that we can see the result before the browser closes - this is only for demo purposes
    await browser.pause(3000);
});

When(/^I go to the cart page$/, async () => {
    await InventoryPage.goToCart();
    //adding this pause so that we can see the result before the browser closes - this is only for demo purposes
    await browser.pause(3000);
});

When(/^I go to the checkout page$/, async () => {
    await CartPage.goToCheckout();
    //adding this pause so that we can see the result before the browser closes - this is only for demo purposes
    await browser.pause(3000);
});

When(/^I complete the checkout process with first name "(.*)" last name "(.*)" and postal code "(.*)"$/, async (firstName, lastName, postalCode) => {
    await CheckoutPage.completeCheckoutProcess(firstName, lastName, postalCode);
    //adding this pause so that we can see the result before the browser closes - this is only for demo purposes
    await browser.pause(3000);
});

When(/^I logout from the application$/, async () => {
    await CheckoutPage.logout();
    //adding this pause so that we can see the result before the browser closes - this is only for demo purposes
    await browser.pause(3000);
});

When('I complete the checkout process with the following details:', async (dataTable) => {
    const data = dataTable.rowsHash();
    await CheckoutPage.completeCheckoutProcess(data.firstname, data.lastname, data.postalcode);
    //adding this pause so that we can see the result before the browser closes - this is only for demo purposes
    await browser.pause(3000);
});