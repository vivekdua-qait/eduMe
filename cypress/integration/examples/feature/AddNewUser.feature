Feature: Add users to a team and search and verify users

@Regression
Scenario: Add User to a Team and verify
Given User Login into the application
When User clicks on the People tab
When User add a Single User and fill all the mandatory details with "<InviteType>" and select team "<TeamName>"
Then User search and verify the new user has been added successfully to the team "<TeamName>" 

Examples:
|InviteType|TeamName|
|Email|1|
|Phone|Test team|

# @Smoke
# Scenario Outline: Add User to a Team
# Given User Login into the application


