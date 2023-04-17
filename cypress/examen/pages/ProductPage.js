import base from './BasePage';

class ProductPage {

    elements = {
        txtSearch: () => cy.get('#search_product'),
        btnSearch: () => cy.get('#submit_search'),
        lnkViewDetail: () => cy.get('div[class=product-image-wrapper] div ul li a')
    }

    searchProduct(productName) {
        base.sendKeys(this.elements.txtSearch(), productName)
        base.click(this.elements.btnSearch())
    }

    viewProductDetail() {
        base.click(this.elements.lnkViewDetail())
    }

}

export default productPage = new ProductPage();
