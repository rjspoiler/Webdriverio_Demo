const { Given } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const LoginPage = require('../pages/login');


Given(/^I am on the login page$/, async () => {
    expect(await LoginPage.btnLogin.isDisplayed()).toBe(true);
});