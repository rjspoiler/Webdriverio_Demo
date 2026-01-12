Feature: Swag Labs Website
 
  Background:
    Given I am on the login page
 
  Scenario: As a user, I can log into the secure area
    When I login into the application
    And I add 3 items to the cart
    And I go to the cart page
    And I go to the checkout page
    And I complete the checkout process with the following details:
      | field      | value   |
      | firstname  | Henry   |
      | lastname   | Higgins |
      | postalcode |  123456 |
    Then I expect that checkout process is successfully completed
    And I logout from the application
