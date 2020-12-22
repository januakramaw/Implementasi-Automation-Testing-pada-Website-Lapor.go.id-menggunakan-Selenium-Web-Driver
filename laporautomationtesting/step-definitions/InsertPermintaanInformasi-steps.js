module.exports = function () {
    this.Given(/^user browse home page Informasi button$/, function () {
        // Write code here that turns the phrase above into concrete actions
        helpers.loadPage('https://www.lapor.go.id')
      });
      
      this.Given(/^user click Informasi button$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function(){
            return page.PermintaanInformasiBtn.performClick();
        })
      });

      this.Given(/^user fill to Judul laporan Permintaan Informasi$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function (){
            return page.fieldJudulLaporanInformasi.performfill();
            })  
      });
       
      this.Given(/^user fill to laporan Permintaan Informasi$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function (){
            return page.fieldLaporanInformasi.performfill();
        })      
      });

      this.Given(/^user fill to asal pelapor Permintaan Informasi$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function (){
            return page.fieldAsalPelapor.performfill();
        })      
      });

      this.Given(/^user fill to instansi tujuan Permintaan Informasi$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function (){
            return page.fieldInstansiTujuan.performfill();
        }) 
      });

      this.Given(/^user fill to kategori laporan Permintaan Informasi$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function (){
            return page.fieldKategoriLaporan.performfill();
        })
      });

      this.When(/^user click Anonim Permintaan Informasi$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function (){
            return page.AnonimBtn.performClick();
        }) 
      });

      this.Then(/^user click lapor Permintaan Informasi$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function (){
            return page.LaporBtn.performClick();
        }) 
      });

}
