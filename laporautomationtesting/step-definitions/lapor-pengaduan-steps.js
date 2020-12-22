module.exports = function () { 
    this.Given(/^user browse home page$/, function () {
        helpers.loadPage('https://www.lapor.go.id/')
    });

    this.Given(/^user click pengaduan button$/, function () {
        driver.then(function () {
            return page.pengaduanBtn.performClick();
        })
    });

    this.Given(/^user fill to Judul laporan$/, function () {
        driver.then(function () {
            return page.fieldJudulLaporan.performFill();
        })
    });

    this.Given(/^user fill to isi laporan$/, function () {
        driver.then(function () {
            return page.fieldIsiLaporan.performFill();
        })
    });

    this.Given(/^user fill to Tanggal kejadian$/, function () {
        driver.then(function () {
            return page.fieldTanggalLaporan.performFill();
        })
    });

    this.Given(/^user fill to Lokasi kejadian$/, function () {
        driver.then(function () {
            return page.fieldLokasiLaporan.performFill();
        })
    });

    this.Given(/^user fill to Instansi tujuan$/, function () {
        driver.then(function () {
            return page.fieldInstansiLaporan.performFill();
        })
    });

    this.When(/^user fill to Kategori laporan$/, function () {
        // driver.then(function () {
        //     return page.fieldKategoriLaporan.performFill();
        // })
    });

    this.Then(/^user click lapor button$/, function () {
        // driver.then(function () {
        //     return page.laporBtn.performClick();
        // })
    });
}
