module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        fieldInstansiLaporan: by.xpath("//*[@id='select_institution_id-selectized']")
    },

    performFill: function () {

        var selector = page.fieldInstansiLaporan.elements.fieldInstansiLaporan;
        return driver.findElement(selector).sendKeys(shared.laporan.instansi);
    }
};
