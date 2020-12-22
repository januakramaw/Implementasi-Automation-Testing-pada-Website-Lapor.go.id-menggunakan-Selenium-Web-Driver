# ./features/InsertAspirasiFailed.feature

Feature: Insert Aspirasi to website
    As a user
    I want to be Insert Aspirasi Anonim and failed fill to instansi

    @success
    Scenario: User insert to aspirasi Failed
        Given user browse home page Failed
        And here user click Aspirasi button Failed
        And here user fill to Judul laporan Failed
        And here user fill to laporan Failed
        And here user fill to asal pelapor Failed
        And here user fill to instansi tujuan Failed
        And here user fill to kategori laporan Failed
        When step here user click Anonim Failed
        Then user click lapor Failed
