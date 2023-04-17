import cartPage from '../pages/CartPage';

import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('procced to checkout', () => {
    cartPage.clickProceedToCheckout()
})
