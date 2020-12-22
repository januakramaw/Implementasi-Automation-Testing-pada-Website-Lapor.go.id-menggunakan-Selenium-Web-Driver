# ./features/InsertAspirasi.feature

Feature: Insert Aspirasi to website
    As a user
    I want to be Insert Aspirasi Anonim

    @success
    Scenario: User insert to aspirasi
        Given user browse home page lapor
        And Start to type your And step here user click Aspirasi button
        And Start to type your And step here user fill to Judul laporan
        And Start to type your And step here user fill to laporan
        And Start to type your And step here user fill to asal pelapor
        And Start to type your And step here user fill to instansi tujuan
        And Start to type your And step here user fill to kategori laporan
        When Start to type your When step here user click Anonim
        Then user click lapor
