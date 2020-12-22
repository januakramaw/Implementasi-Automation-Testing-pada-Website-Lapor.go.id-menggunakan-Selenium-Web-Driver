# ./features/InsertAspirasiRahasia.feature

Feature: Insert Aspirasi Rahasia to website
    As a user
    I want to be Insert Aspirasi Rahasia

    @success
    Scenario: User insert to aspirasi and click Rahasia
        Given user browse home page Rahasia
        And user click Aspirasi button Rahasia
        And user fill to Judul laporan Rahasia
        And user fill to laporan Rahasia
        And user fill to asal pelapor Rahasia
        And user fill to instansi tujuan Rahasia
        And user fill to kategori laporan Rahasia
        When user click Rahasia
        Then user click lapor Rahasia
