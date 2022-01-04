Feature: Explorer view
  The explorer page must be a complete
  layout with all the routines and users
  recommended and with a search engine
  that allows the user's preference search.

  Scenario: User is at the explorer page
    Given User is at the explorer page
    When User look at the view
    Then User should see the explorer layout as espected

# Scenario: User wants to interact with a recommended routine
#   Given User is at the explorer page
#   When User click at recommended routine
#   Then A new view with recommended routine appears

# Scenario: User wants to interact with a recommended user
#   Given User is at the explorer page
#   When User click at recommended user
#   Then A new view with recommended user appears

# Scenario: User wants to search in search engine
#   Given User is at the explorer page
#   When User search for their preferences
#   Then A new view with preferences that the user is looking for
