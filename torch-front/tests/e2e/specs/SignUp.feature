Feature: User sign up
  Scenario: User register with username, email and password
    Given User is at the sign up page
    When User enters username as '<username>', email as '<email>' and password as '<password>'
    And User clicks on sign up button
    Then User is fully registered and able to successfully login
