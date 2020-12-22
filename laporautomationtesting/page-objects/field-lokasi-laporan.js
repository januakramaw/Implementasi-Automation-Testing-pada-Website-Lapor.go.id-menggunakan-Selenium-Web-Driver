module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        fieldLokasiLaporan: by.xpath("//*[@id='location_id-selectized']")
    },

    performFill: function () {

        var selector = page.fieldLokasiLaporan.elements.fieldLokasiLaporan;
        return driver.findElement(selector).sendKeys(shared.laporan.lokasi);
    }
};
