# ./features/lapor-pengaduan.feature

Feature: Insert laporan pengaduan sudah login
    As a user has login
    I want to be able to insert laporan pengaduan

    @success
    Scenario: User Insert to pengaduan
        Given user browse home page
        And user fill to Judul laporan
        And user fill to isi laporan
        And user fill to Tanggal kejadian
        And user fill to Lokasi kejadian
        And user fill to Instansi tujuan
        When user fill to Kategori laporan
        Then user click lapor button
