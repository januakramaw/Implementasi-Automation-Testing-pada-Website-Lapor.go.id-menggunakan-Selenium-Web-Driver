module.exports = function () {

  this.Given(/^user browse home page Rahasia$/, function () {
    // Write code here that turns the phrase above into concrete actions
    helpers.loadPage('https://www.lapor.go.id')
  });

  this.Given(/^user click Aspirasi button Rahasia$/, function () {
    // Write code here that turns the phrase above into concrete actions
    driver.then(function () {
      return page.AspirasiBtn.performClick();
    })
  });

  this.Given(/^user fill to Judul laporan Rahasia$/, function () {
    // Write code here that turns the phrase above into concrete actions
    driver.then(function () {
      return page.fieldJudulLaporan.performFill();
    })
  });

  this.Given(/^user fill to laporan Rahasia$/, function () {
    // Write code here that turns the phrase above into concrete actions
    driver.then(function () {
      return page.fieldLaporan.performfill();
    })
  });

  this.Given(/^user fill to asal pelapor Rahasia$/, function () {
    // Write code here that turns the phrase above into concrete actions
    driver.then(function () {
      return page.fieldAsalPelapor.performfill();
    })
  });

  this.Given(/^user fill to instansi tujuan Rahasia$/, function () {
    // Write code here that turns the phrase above into concrete actions
    driver.then(function () {
      return page.fieldInstansiTujuan.performfill();
    })
  });

}
