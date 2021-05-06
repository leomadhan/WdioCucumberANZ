Feature: Performing a login
    As a user on the login page
    I want to register
    Because I want to login in landing page
    Background:
        Given I am on the login page
    Scenario Outline: Performing CREATE AN ACCOUNT operation with passing test data
        When I register with email "yalensia997@boranora.com" into the text box
        Then I should see the message "YOUR PERSONAL INFORMATION" on the account-creation page and register
        Then I should land on the account-landing page and check "aa zz"
        When Logout and login again "overmatche@wingkobabat.buzz" "12345"
        Then I should land on the account-landing page and check "aa zz"
   