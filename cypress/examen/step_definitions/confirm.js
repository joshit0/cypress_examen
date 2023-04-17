import confirmPage from '../pages/ConfirmPage';

import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('show message {string}', (message) => {
    confirmPage.validateConfirmationMessage(message)
})
