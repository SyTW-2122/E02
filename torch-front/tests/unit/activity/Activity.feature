Feature: Activity page

    Scenario: Opening the activity page
        Given the page is open in a browser
        When user inspects the page
        Then user shoul see the activities aspects
        And page should contain activities from another users
        And page should contain activities that were liked by other users
        And page should contain name of the activity owner or creator.
        And page should contain comments about the activity from other users
        And page should contain activity title and description
        And page should contain activity creation date
        And user should be able to access to activity details by the 3 points button
        And user should be able to leave a comment on an activity
        And user should be able to like an activity
