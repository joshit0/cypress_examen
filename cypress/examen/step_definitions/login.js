import loginPage from '../pages/LoginPage';

import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('set email {string}', (username) => {
    loginPage.setEmail(username)
})


When('set password {string}', (password) => {
    loginPage.setPassword(password)
})


When('click on login button', () => {
    loginPage.clickLogin();
})

Then('show error message {string}', (message) => {
    loginPage.validateErrorMessage(message);
})

Given('log in with credentials', (datatable) => {
   loginPage.login(datatable)
})