import base from './BasePage';

class CheckoutPage {

    elements = {
        btnPlaceOrder: () => cy.get('a[href="/payment"]'),
    }

    clickPlaceOrder() {
        base.click(this.elements.btnPlaceOrder())
    }


}

export default checkoutPage = new CheckoutPage();
