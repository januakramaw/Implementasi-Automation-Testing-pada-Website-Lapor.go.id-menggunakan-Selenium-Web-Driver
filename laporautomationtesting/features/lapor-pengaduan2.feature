# ./features/lapor-pengaduan2.feature

Feature: Insert laporan pengaduan belum login
    As a user has'n login
    I want to insert laporan pengaduan

    @success
    Scenario: User Insert to pengaduan belum login
        Given user browse home page2
        And user fill to Judul laporan2
        And user fill to isi laporan2
        And user fill to Tanggal kejadian2
        And user fill to Lokasi kejadian2
        And user fill to Instansi tujuan2
        When user fill to Kategori laporan2
        Then user click lapor button2