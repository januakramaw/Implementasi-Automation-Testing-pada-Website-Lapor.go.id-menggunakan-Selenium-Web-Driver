module.exports = function () {
    this.Given(/^user browse home page lapor$/, function () {
        // Write code here that turns the phrase above into concrete actions
        helpers.loadPage('https://www.lapor.go.id')
    });

    this.When(/^Start to type your And step here user click Aspirasi button$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.AspirasiBtn.performClick();
        })
    });
    this.When(/^Start to type your And step here user fill to Judul laporan$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldJudulLaporanAspirasi.performFill();
        })
    });

    this.When(/^Start to type your And step here user fill to laporan$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldLaporan.performfill();
        })
    });

    this.When(/^Start to type your And step here user fill to asal pelapor$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldAsalPelapor.performfill();
        })
    });

    this.When(/^Start to type your And step here user fill to instansi tujuan$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldInstansiTujuan.performfill();
        })
    });

    this.When(/^Start to type your And step here user fill to kategori laporan$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldKategoriLaporan.performfill();
        })
    });

    this.Given(/^Start to type your When step here user click Anonim$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.AnonimBtn.performClick();
        })
    });

    this.Then(/^user click lapor$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.LaporBtn.performClick();
        })
    });

}
