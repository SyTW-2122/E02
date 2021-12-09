Feature: Sing Up page

Scenario: Opening the sign up page
  Given the page is open in a browser
  When user inspects the page
  Then user should see the form sign up
  And page should contain title logo
  And page should contain the option to see the password writed
  And page should contain the option to login with Google
  And page should contain the option to login with Facebook
  And page should contain the form sign up
  And When user taps on sign up buttom
    Then page content is changed
    And the login view is displayed
  And When user taps on login here
    Then page content is changed
    And the login view is displayed
  And When user taps on login with Google
    Then page content is changed
  And When user taps on login with Facebook
    Then page content is changed
