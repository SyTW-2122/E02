Feature: User sign in
    Scenario: User login with username and password
        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User is ablle to successfully login
    
