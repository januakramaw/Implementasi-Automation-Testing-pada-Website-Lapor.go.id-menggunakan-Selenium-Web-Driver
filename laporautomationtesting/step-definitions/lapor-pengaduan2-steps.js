module.exports = function () { 
    this.Given(/^user browse home page2$/, function () {
        helpers.loadPage('https://www.lapor.go.id/')
    });

    this.Given(/^user click pengaduan button2$/, function () {
        driver.then(function () {
            return page.pengaduanBtn.performClick();
        })
    });

    this.Given(/^user fill to Judul laporan2$/, function () {
        driver.then(function () {
            return page.fieldJudulLaporan.performFill();
        })
    });

    this.Given(/^user fill to isi laporan2$/, function () {
        driver.then(function () {
            return page.fieldIsiLaporan.performFill();
        })
    });

    this.Given(/^user fill to Tanggal kejadian2$/, function () {
        driver.then(function () {
            return page.fieldTanggalLaporan.performFill();
        })
    });

    this.Given(/^user fill to Lokasi kejadian2$/, function () {
        driver.then(function () {
            return page.fieldLokasiLaporan.performFill();
        })
    });

    this.Given(/^user fill to Instansi tujuan2$/, function () {
        driver.then(function () {
            return page.fieldInstansiLaporan.performFill();
        })
    });

    this.When(/^user fill to Kategori laporan2$/, function () {
        // driver.then(function () {
        //     return page.fieldKategoriLaporan.performFill();
        // })
    });

    this.Then(/^user click lapor button2$/, function () {
        // driver.then(function () {
        //     return page.laporBtn.performClick();
        // })
    });
}
