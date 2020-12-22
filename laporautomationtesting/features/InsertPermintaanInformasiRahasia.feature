# ./features/InsertPermintaanInformasiRahasia.feature

Feature: Insert Permintaan Informasi to website
    As a user
    I want to be Insert Permintaan Informasi Rahasia

    @success
    Scenario: User insert to Permintaan Informasi to rahasia
        
        Given user browse home page Permintaan Informasi Rahasia
        And user click Permintaan Informasi Rahasia
        And user fill to Judul laporan Permintaan Informasi Rahasia
        And user fill to laporan Permintaan Informasi Rahasia
        And user fill to asal pelapor Permintaan Informasi Rahasia
        And user fill to instansi tujuan Permintaan Informasi Rahasia
        And user fill to kategori laporan Permintaan Informasi Rahasia
        When user click Rahasia Permintaan Informasi Rahasia
        Then user click lapor Permintaan Informasi Rahasia