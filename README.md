# cypress_examen
Creado por José Quispe


Instalar las dependencias
```
npm install
```


### Comandos disponibles
| commando  | descripcion |
| ------------- | ------------- |
|npm run test_all  | Ejecuta todos los test creados  |
|npm run allure:report | Genera reporte allure  |
|npm run allure:open|Abre el reporte creando un webserver|
|npm run allure:clear|Elimina las carpetas|


### Features creados

login.feature

```
Feature: Login
Como usuario 
Quiero realizar el proceso de login
Para poder comprar productos

  Background: 
    Given I open automationexercise page
    And go to "login" page

  Scenario: Login successfully
    When set email "juanperez@gmail.com"
    And set password "Dsbshr123*"
    And click on login button
    Then show user main page
    And user is logged as "Juan Perez"

  Scenario Outline: Login successfully - <email>
    When set email "<email>"
    And set password "<password>"
    And click on login button
    Then show user main page
    And user is logged as "<name>"

    Examples: 
      | email                    | password       | name           |
      | juanperez@gmail.com      | Dsbshr123*     | Juan Perez     |
      | automationtest@gmail.com | automationtest | automationtest |

  Scenario Outline: Login with invalid credentials - <email>
    When set email "<email>"
    And set password "<password>"
    And click on login button
    Then show error message "Your email or password is incorrect!"

    Examples: 
      | email                    | password       | name           |
      | juanperez@gmail.com      | Spktrrr*       | Juan Perez     |
      | automationtest@gmail.com | *aaa15142235** | automationtest |
      | pruebaqa@gmail.com       | kksi7729       | prueba 1       |

```

realizar_compra.feature

```
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

```