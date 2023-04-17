import base from './BasePage';

class ConfirmPage {

    elements = {
        lblMessage: () => cy.get('#form div[class="row"] div p'),
     
    }

    validateConfirmationMessage(message) {
        base.compareElementText(this.elements.lblMessage(),message)
    }

}

export default confirmPage = new ConfirmPage();
