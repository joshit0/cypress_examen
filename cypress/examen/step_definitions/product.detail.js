import productDetailPage from '../pages/ProductDetailPage';

import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('add product to cart', () => {
    productDetailPage.clickAddToCart()
})

When('go to link view cart', () => {
    productDetailPage.clickViewCart()
})