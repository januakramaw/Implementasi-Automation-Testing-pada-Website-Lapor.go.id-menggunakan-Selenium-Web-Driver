module.exports = function () { 
    this.Given(/^user browse home page3$/, function () {
        helpers.loadPage('https://www.lapor.go.id/')
    });

    this.Given(/^user click pengaduan button3$/, function () {
        driver.then(function () {
            return page.pengaduanBtn.performClick();
        })
    });

    this.Given(/^user fill to Judul laporan3$/, function () {
        driver.then(function () {
            return page.fieldJudulLaporan.performFill();
        })
    });

    this.Given(/^user fill to isi laporan3$/, function () {
        driver.then(function () {
            return page.fieldIsiLaporan.performFill();
        })
    });

    this.Given(/^user fill to Tanggal kejadian3$/, function () {
        driver.then(function () {
            return page.fieldTanggalLaporan.performFill();
        })
    });

    this.Given(/^user fill to Lokasi kejadian3$/, function () {
        driver.then(function () {
            return page.fieldLokasiLaporan.performFill();
        })
    });

    this.Given(/^user fill to Instansi tujuan3$/, function () {
        driver.then(function () {
            return page.fieldInstansiLaporan.performFill();
        })
    });


    this.Then(/^user click lapor button3$/, function () {
        driver.then(function () {
            return page.laporBtn.performClick();
        })
    });
}
