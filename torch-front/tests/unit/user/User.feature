Feature: User profile page

  Scenario: Opening the user page
    Given the page is open in a browser
    When user inspects the page
    Then user should see the User profile aspects
    And page should contain profile picture
    And page should contain user name
    And page should contain user subtitle
    And page should contain profile settings tool
    And page should contain profile edit tool
    And page should contain profile stats tool
    And page should contain 3 tabs with history, creation tool and notifications
    And user should be able to access followers list
    And user should be able to access following list
    And user should be able to access post list
    And user should be able to scroll through routine history list
    And When user taps on creation tool tab
    Then page content is changed
    And created routine list is displayed
    And tips page is displayed and editable
    And new content button is didsplayed
    And When user taps on notification tool tab
    Then page content is changed
    And notification list is displayed
    And user is able to filter notifications
