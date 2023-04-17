Feature: Realizar compra

  Scenario Outline: Realizar compra de un producto
    Given I open automationexercise page
    And go to "login" page
    And log in with credentials
      | email   | password   |
      | <email> | <password> |
    And go to "products" page
    When search product "<product>"
    And view product detail
    And add product to cart
    And go to link view cart
    And procced to checkout
    And place order
    And pay the product with card
      | card_name       | card_number      | cvc | expiration_MM | expiration_YYYY |
      | Automation Card | 9548451415141256 | 325 |            06 |            2028 |
    Then show message "Congratulations! Your order has been confirmed!"

    Examples: 
      | email                    | password       | product    | card_name       | card_number      | cvc | expiration_MM | expiration_YYYY |
      | automationtest@gmail.com | automationtest | Winter Top | Automation Card | 9548451415141256 | 325 |            06 |            2028 |
