import productPage from '../pages/ProductPage';

import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('search product {string}', (product) => {
    productPage.searchProduct(product)
})

When('view product detail', () => {
    productPage.viewProductDetail()
})



