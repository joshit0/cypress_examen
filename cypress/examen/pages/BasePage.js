class BasePage {

    sendKeys(element, value) {
        element.should('be.visible').type(value).should('have.value', value)
    }

    click(element) {
        element.should('be.visible').click()
    }

    validateVisible(element) {
        element.should('be.visible')
    }

    compareElementText(element, expectedValue) {
        element
            .should('exist')
            .should(($b) => {
                const actualValue = $b.text()
                expect(actualValue, "validation error").to.equal(expectedValue)
            })
    }

    openUrl(url) {
        cy.visit(url)
    }

}

export default base = new BasePage();
