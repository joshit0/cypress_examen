import base from './BasePage';

class PaymentPage {

    elements = {
        txtCardName: () => cy.get('input[name="name_on_card"]'),
        txtCardNumber: () => cy.get('input[name="card_number"]'),
        txtCVC: () => cy.get('input[name="cvc"]'),
        txtExpMM: () => cy.get('input[name="expiry_month"]'),
        txtExpYYYY: () => cy.get('input[name="expiry_year"]'),
        btnPayAndConfirm: () => cy.get('#submit')
    }

    setCardName(value) {
        base.sendKeys(this.elements.txtCardName(), value)
    }

    setCardNumber(value) {
        base.sendKeys(this.elements.txtCardNumber(), value)
    }

    setCVC(value) {
        base.sendKeys(this.elements.txtCVC(), value)
    }

    setExpMM(value) {
        base.sendKeys(this.elements.txtExpMM(), value)
    }

    setExpYYYY(value) {
        base.sendKeys(this.elements.txtExpYYYY(), value)
    }

    clickBtnPayAndConfirm() {
        base.click(this.elements.btnPayAndConfirm())
    }

    pay(datatable) {
        datatable.hashes().forEach((item) => {
            this.setCardName(item.card_name)
            this.setCardNumber(item.card_number)
            this.setCVC(item.cvc)
            this.setExpMM(item.expiration_MM)
            this.setExpYYYY(item.expiration_YYYY)

            this.clickBtnPayAndConfirm()
        });
    }

}

export default paymentPage = new PaymentPage();
