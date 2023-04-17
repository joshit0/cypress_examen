import base from './BasePage';

class LoginPage {

    elements = {
        txtEmail: () => cy.get('input[data-qa="login-email"]'),
        txtPassword: () => cy.get('input[data-qa="login-password"]'),
        btnLogin: () => cy.get('button[data-qa="login-button"]'),
        btnLogout: () => cy.get('a[href="/logout"]'),
        lblErrorMessage: () => cy.get('form[action="/login"] p'),
    }

    setEmail(username) {
        base.sendKeys(this.elements.txtEmail(), username)
    }

    setPassword(password) {
        base.sendKeys(this.elements.txtPassword(), password)
    }

    clickLogin() {
        base.click(this.elements.btnLogin())
    }


    validateErrorMessage(message) {
        base.compareElementText(this.elements.lblErrorMessage(), message)
    }

    login(datatable) {
        datatable.hashes().forEach((item) => {
            this.setEmail(item.email)
            this.setPassword(item.password)
        });
        this.clickLogin()
    }
}

export default loginPage = new LoginPage();
