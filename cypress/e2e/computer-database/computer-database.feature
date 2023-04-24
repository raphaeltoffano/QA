# cypress/e2e/computer-database.feature
Feature: Computer Database
  Scenario: Visit the computer's homepage and check the elements present on the page
    When I visit the home page 
    Then I should see the main elements on the page

  Scenario: Verify search functionality
    When I perform a valid search
    Then I should see the matching search results

  Scenario: Invalid search query
    When I perform an invalid search
    Then I should see no search results

  Scenario: Add a computer
    When I fill in the required fields and submit the form
    Then the computer should be added successfully

  Scenario: Attempt to add a computer without filling in required fields
    When I attempt to submit the form without filling in the required fields
    Then I should see an error message indicating the required fields
