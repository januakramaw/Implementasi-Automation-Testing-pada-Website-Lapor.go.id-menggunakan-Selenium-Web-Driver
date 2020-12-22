# ./features/PermintaanInformasiFailed.feature

Feature: Insert Permintaan Informasi to website
    As a user
    I want to be Insert Permintaan Informasi to Instansi and failed

    @success
    Scenario: User insert to Permintaan Informasi and Failed
        
        Given user browse home page Informasi button failed
        And user click Informasi button failed
        And user fill to Judul laporan Permintaan Informasi failed
        And user fill to laporan Permintaan Informasi failed
        And user fill to asal pelapor Permintaan Informasi failed
        And user fill to instansi tujuan Permintaan Informasi failed
        And user fill to kategori laporan Permintaan Informasi failed
        When user click Anonim Permintaan Informasi failed
        Then user click lapor Permintaan Informasi failed
