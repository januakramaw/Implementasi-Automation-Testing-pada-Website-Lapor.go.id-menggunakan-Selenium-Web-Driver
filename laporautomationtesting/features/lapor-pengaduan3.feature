# ./features/lapor-pengaduan3.feature

Feature: User gagal Insert to pengaduan karena field kategori dikosong
    As a user has login
    I want to be able to insert laporan pengaduan

    @failed
    Scenario: User gagal Insert to pengaduan karena field kategori dikosong 
        Given user browse home page3
        And user fill to Judul laporan3
        And user fill to isi laporan3
        And user fill to Tanggal kejadian3
        And user fill to Lokasi kejadian3
        When user fill to Instansi tujuan3
        Then user click lapor button3
