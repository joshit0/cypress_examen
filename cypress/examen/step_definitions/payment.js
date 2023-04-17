import paymentPage from '../pages/PaymentPage';

import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('pay the product with card', (datatable) => {
    paymentPage.pay(datatable)
})
