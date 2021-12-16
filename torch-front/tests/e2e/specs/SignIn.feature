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
 