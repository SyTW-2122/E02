Feature: User profile page view
  The user profile page must be a complete
  layout with all th tools and information
  about routines, history and personal blog
  with notifications and social feedback.

  Scenario: User is at his own profile
    Given I am logged in as "eric"
    When I look at the view
    Then I should see all the profile layout as espected

# Scenario: User wants to check followers
#   Given I am logged in as "eric"
#   When I click at the followers number
#   Then A new view with a list of usernames and pictures appears

# Scenario: User wants to check followers
#   Given I am logged in as "eric"
#   When I click at the followers number
#   Then A new view with a list of usernames and pictures appears

# Scenario: User wants to check following users
#   Given I am logged in as "eric"
#   When I click at the following number
#   Then A new view with a list of usernames and pictures appears
#   When user is mutual
#   Then mutual tag appears

# Scenario: User wants to go to profile settings
#   Given I am logged in as "eric"
#   When I click at the three dots button
#   Then list of options view is displayed from the bottom

# Scenario: User wants to edit profile info
#   Given I am logged in as "eric"
#   When I click at the edit profile button
#   Then user profile form is displayed to change info

# Scenario: User wants to check stats
#   Given I am logged in as "eric"
#   When I click at the evolution button
#   Then user stats view is displayed

# Scenario: User scrolls on history tab
#   Given I am logged in as "eric" and history tab is active
#   When I scroll down
#   Then list of of completed routines cards with date and status is displayed

# Scenario: User checks creator tab
#   Given I am logged in as "eric" and creator tab is tapped
#   When view is displayed
#   Then tips and routines creator tools are displayed

# Scenario: User checks notification tab
#   Given I am logged in as "eric" and notifications tab is tapped
#   When view is displayed
#   Then notification and chat lists are displayed