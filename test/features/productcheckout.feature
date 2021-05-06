Feature: Performing Product otder

    As a user on the login page
    I want to order product and purchase

    Background:
        Given I am on the login page

    Scenario Outline: Performing product order
        When login as "overmatche@wingkobabat.buzz" "12345"
        Then I should land on the account-landing page and check "aa zz"
        Then Add a product to the cart
        When Proceed to the checkout page display
        Then Validate on the payments page if the product details "Faded Short Sleeve T-shirts" are correct.
        