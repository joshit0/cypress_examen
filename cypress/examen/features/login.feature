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
