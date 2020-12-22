Feature: Signin on the website
    As a user
    I want to be able to signin 

    @failed
    Scenario: User failed to log in 
    Given user browser log in page
    And user fill wrong email field
    When user fill wrong password field
    Then user click button to login
    
    