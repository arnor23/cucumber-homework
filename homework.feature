Feature: Homework

  Scenario: Extract first number from sentence
    Given a sentence with a number: "I have 2 cats and 1 dog"
    When the first number is extracted from the sentence
    Then the extracted number should be 2

  Scenario: Check if a URL is valid
    Given a URL: "https://google.com"
    When I validate the format
    Then it should be valid  

  Scenario: Check if login credentials are valid
    Given I have the following users:
        | user     | password | status |
        | aguzman  | unqork   | true   |
        | vmercado | cocha    | false  |
        | ldiaz    | bridge   | true   |
    Then each user should be validated correctly

  Scenario Outline: Calculate total price for a shopping cart
    Given the following items in the cart: <cartItems>
    When I calculate the total price
    Then the total price should be <total>

     Examples:
      | cartItems                        | total |
      | "apple,2;banana,1;orange,3"      | 6     |
      | "milk,4;bread,3;cheese,5"        | 12    |