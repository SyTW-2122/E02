Feature: Sign In page

Scenario: Opening the sign in page
  Given the page is open in a browser
  When user inspects the page
  Then user should see the form login
  And page should contain logo 
  And page should contain title
  And page should contain the option to remember the login information
  And page should contain the option to login with Google
  And page should contain the option to login with Facebook
  And When user taps on login buttom
    Then page content is changed
    And the activities view is displayed
  And When user taps on Create a torch account
    Then page content is changed
    And the sign up view is displayed
  And When user taps on forgot password
    Then page content is changed
  And When user taps on login with Google
    Then page content is changed
  And When user taps on login with Facebook
    Then page content is changed
