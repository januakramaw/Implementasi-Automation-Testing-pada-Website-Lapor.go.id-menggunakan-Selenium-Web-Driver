# ./features/sigin.feature

Feature: Signin on the website
    As a user
    I want to be able to signin 

    @success
    Scenario: User success to sigin on the website with email
        Given user browse signin page
        And user fill email field
        When user fill password field
        Then user click login button
    
