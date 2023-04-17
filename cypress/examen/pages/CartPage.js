import base from './BasePage';

class CartPage {

    elements = {
        btnCheckout: () => cy.get('a[class="btn btn-default check_out"]'),
    }

    clickProceedToCheckout() {
        base.click(this.elements.btnCheckout())
    }


}

export default cartPage = new CartPage();
