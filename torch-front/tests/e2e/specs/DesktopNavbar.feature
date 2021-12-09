Feature: Display navbar for desktop

  Scenario: Elements under activity view
    When I'm in te activity page
    Then I should see the activity content
    And The activity link in navbar is active
