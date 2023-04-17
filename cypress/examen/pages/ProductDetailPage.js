import base from './BasePage';

class ProductDetailPage {

    elements = {
        btnAddToCart: () => cy.get('div[class="product-information"] span button'),
        btnContinueShopping: () => cy.get('#cartModal div div div button'),
        lbkViewCart: () => cy.get('a[href="/view_cart"] u'),
    }

    clickAddToCart() {
        base.click(this.elements.btnAddToCart())
    }

    clickViewCart(){
        base.click(this.elements.lbkViewCart())
        
    }

    clickContinueShopping() {
        base.click(this.elements.btnContinueShopping())
    }

}

export default productDetailPage = new ProductDetailPage();
