Feature: Explore page

Scenario: Opening the explore page
  Given the page is open in a browser
  When user inspects the page
  Then user should see the explore aspects
  And page should contain recommended activities
  And page should contain recommended users
  And user should be able to search routines or users
  And user should be able to scroll through the explore page
  And user should be able to access to the recommended activities
  And user should be able to access to the recommended users
  And When user taps on a recommended activity
    Then page content is changed
    And the recommended routine is displayed
  And When user taps on a recommended user 
    Then page content is changed
    And the recommended user is displayed