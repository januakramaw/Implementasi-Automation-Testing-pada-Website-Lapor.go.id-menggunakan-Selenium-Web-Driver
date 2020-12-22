Feature: Registrasi
    As a user
    I want to be able to Registration

    @success
    Scenario: User success to daftar on the website
        Given user browse daftar page
        And user fill namaLengkap to daftar
        And user fill email to daftar
        And user fill password to daftar
        And user fill username to daftar
        And user fill notelp to daftar
        And user confirm password to daftar
        And user ceklist box privacy policy
        When user click daftar button
        Then user can see home page
