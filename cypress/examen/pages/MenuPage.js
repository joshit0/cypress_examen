import base from './BasePage';
class MenuPage {
    elements = {
        lnkHome: () => cy.get('a[href="/"]'),
        lnkProducts: () => cy.get('a[href="/products"]'),
        lnkCart: () => cy.get('p a[href="/view_cart"]'),
        lnkLogin: () => cy.get('a[href="/login"]'),
        lnkLogout: () => cy.get('a[href="/logout"]'),

        lblLoggedName: () => cy.get('b')
    }

    pageLoggedIsLoaded() {
        base.validateVisible(this.elements.lnkLogout())
    }

    userIsLogged(name) {
        base.compareElementText(this.elements.lblLoggedName(), name)
    }

    goTo(option) {
        switch (option) {
            case 'home': base.click(this.elements.lnkHome())
                break;
            case 'products': base.click(this.elements.lnkProducts())
                break;
            case 'cart': cy.scrollTo(0, -1000)
                base.click(this.elements.lnkCart())
                break;
            case 'login': base.click(this.elements.lnkLogin())
                break;
            case 'logout': base.click(this.elements.lnkLogout())
                break;
            default: base.click(this.elements.lnkHome())
                break;
        }

    }


}

export default menuPage = new MenuPage();




