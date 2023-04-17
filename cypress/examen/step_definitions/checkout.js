import checkoutPage from '../pages/CheckoutPage';

import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('place order', () => {
    checkoutPage.clickPlaceOrder()
})
