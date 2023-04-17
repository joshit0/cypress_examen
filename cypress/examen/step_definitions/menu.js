import menuPage from '../pages/MenuPage';
import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


Given('go to {string} page', (menuName) => {
    menuPage.goTo(menuName)
})

Then('show user main page', () => {
    menuPage.pageLoggedIsLoaded();
})


Then('user is logged as {string}', (name) => {
    menuPage.userIsLogged(name);
})
