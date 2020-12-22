# ./features/InsertPermintaanInformasi.feature

Feature: Insert Permintaan Informasi to website
    As a user
    I want to be Insert Permintaan Informasi Anonim

    @success
    Scenario: User insert to Permintaan Informasi
        
        Given user browse home page Informasi button
        And user click Informasi button
        And user fill to Judul laporan Permintaan Informasi
        And user fill to laporan Permintaan Informasi
        And user fill to asal pelapor Permintaan Informasi
        And user fill to instansi tujuan Permintaan Informasi
        And user fill to kategori laporan Permintaan Informasi
        When user click Anonim Permintaan Informasi
        Then user click lapor Permintaan Informasi
