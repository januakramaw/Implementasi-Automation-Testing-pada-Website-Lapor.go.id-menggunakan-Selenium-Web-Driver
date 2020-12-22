module.exports = function () {

  this.Given(/^user browse home page Failed$/, function () {
    // Write code here that turns the phrase above into concrete actions
    helpers.loadPage('https://www.lapor.go.id')
  });

  this.When(/^here user click Aspirasi button Failed$/, function () {
    // Write code here that turns the phrase above into concrete actions
    driver.then(function () {
      return page.AspirasiBtn.performClick();
    })
  });

  this.When(/^here user fill to Judul laporan Failed$/, function () {
    // Write code here that turns the phrase above into concrete actions
    driver.then(function () {
      return page.fieldJudulLaporanInformasi.performFill();
    })
  });

  this.When(/^here user fill to laporan Failed$/, function () {
    // Write code here that turns the phrase above into concrete actions
    driver.then(function () {
      return page.fieldLaporanInformasi.performFill();
    })
  });

  this.When(/^here user fill to asal pelapor Failed$/, function () {
    // Write code here that turns the phrase above into concrete actions
    driver.then(function () {
      return page.fieldAsalPelapor.performFill();
    })
  });

  this.When(/^here user fill to instansi tujuan Failed$/, function () {
    // Write code here that turns the phrase above into concrete actions
    driver.then(function () {
      return page.fieldInstansiTujuanFailed.performFill();
    })
  });

  this.When(/^here user fill to kategori laporan Failed$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return page.fieldKategoriLaporan.performFill();
  });

  this.When(/^step here user click Anonim Failed$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return page.AnonimBtn.performClick();
  });

  this.Then(/^user click lapor Failed$/, function () {
    return page.LaporBtn.performClick();
  });

}