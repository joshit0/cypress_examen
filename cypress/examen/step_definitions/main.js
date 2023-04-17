import mainPage from '../pages/MainPage';
import menuPage from '../pages/MenuPage';
import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


Given('I open automationexercise page', () => {
    mainPage.openAutomationexerciseSite();
})





