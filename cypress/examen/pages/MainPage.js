import base from '../pages/BasePage';
class MainPage{

    openAutomationexerciseSite() {
        base.openUrl('https://www.automationexercise.com')
    }
}

export default mainPage = new MainPage();