Feature: User sign up
  Scenario: User register with username and password
    Given User is at the sign up page
    When User enters username as "usu1" and password as "usu1"
    And User clicks on sign up button
    Then User is fully registered and able to successfully login
