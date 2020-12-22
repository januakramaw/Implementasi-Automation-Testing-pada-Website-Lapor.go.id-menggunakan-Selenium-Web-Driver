Feature: Registrasi2
    Pemberitahuan muncul,
    saat saya Mendaftar dan menyisipkan nomor telepon yang kurang dari batas minimum

    @notsuccess
    Scenario: pengguna gagal melakukan pendaftaran
        Given pengguna mencari halaman daftar
        And pengguna mengisi namaLengkap untuk daftar
        And pengguna mengisi email untuk daftar
        And pengguna mengisi password untuk daftar
        And pengguna mengisi username untuk daftar
        And pengguna mengisi notelp untuk daftar
        And pengguna mengkonfirmasi password untuk daftar
        And pengguna menceklist box keamanan
        When pengguna klik tombol daftar
        Then pengguna diarahkan ke halaman home
