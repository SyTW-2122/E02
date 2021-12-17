Feature: User sign up
  Scenario: User without an account created can not login and taps on register link
    Given User is at the login main page
    When User enters not valid username as "usu1" and password as "usu1"
    And User clicks on button
    Then User is not able to login
    When User clicks on register link
    Then User is at the register page

  Scenario: User register with username, email and password
    When User enters username as "<username>", email as "<email>" and password as "<password>"
    And User clicks on sign up button
    Then User is fully registered and able to successfully login
