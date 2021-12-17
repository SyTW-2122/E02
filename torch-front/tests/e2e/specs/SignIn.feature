Feature: User sign in
  Scenario Outline: User with an acount created can login with username and password
    Given User is at the login page
    When User enters username as "<username>" and password as "<password>"
    And User clicks on login button
    Then User is able to login
    

    Examples:
      | username | password |
      |     Eric |     1234 |
      |    Laura |     1234 |

  Scenario: User without an account created can not login and taps on register link
    Given User is at the login main page
    When User enters not valid username as "usu1" and password as "usu1"
    And User clicks on button
    Then User is not able to login
    When User clicks on register link
    Then User is at the register page